const express = require('express');
const router = express.Router();
const dbConfig = require('../../dbConfig.js');
const Busboy = require('busboy');
const path = require('path');
const os = require('os');
const fs = require('fs');
const UUID = require('uuid-v4');
let inspect = require('util').inspect;


router.get('/', (req, res) => {
  let posts = []
  dbConfig.db.collection('posts').orderBy('date', 'desc').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      posts.push(doc.data());
    })
    res.send(posts);
  })
});

router.post('/add', (req, res) => {
  let uuid = UUID();
  let busboy = new Busboy({ headers: req.headers });
  let fields = {};
  let fileData = {};

    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
      let filepath = path.join(os.tmpdir(), filename);
      file.pipe(fs.createWriteStream(filepath));
      fileData = { filepath, mimetype }
    });

    busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
      console.log('Field [' + fieldname + ']: value: ' + inspect(val));
      fields[fieldname] = val;
    });

    busboy.on('finish', function() {
      dbConfig.bucket.upload(
        fileData.filepath,
        {
          uploadType: 'media',
          metadata: {
            metadata:  {
              contentType: fileData.mimetype,
              firebaseStorageDownloadTokens: uuid
            }
          }
        },
        (err, uploadedFile) => {
          if(!err) {
            createDocument(uploadedFile, fields, uuid);
          }
        }
      )
      function createDocument(uploadedFile) {
        dbConfig.db.collection('posts').doc(fields.id).set({
          id: fields.id,
          caption: fields.caption,
          location: fields.location,
          date: parseInt(fields.date),
          imageUrl: `https://firebasestorage.googleapis.com/v0/b/${dbConfig.bucket.name}/o/${uploadedFile.name}?alt=media&token=${uuid}`
        })
        .then(() => {
          res.send('Successfully shared');
        })
      }
    });
    req.pipe(busboy);
})






module.exports = router;
