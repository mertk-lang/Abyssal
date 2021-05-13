<template>
<q-page class="container q-pa-md">
<div class="row q-col-gutter-lg">
  <div class="col-12 col-sm-8">
     <q-card v-for="post in posts" :key="post.id" class="card-post q-mb-md" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://i.pinimg.com/originals/55/55/87/555587aa4cd4a2822dc7a06e70ca998f.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold">Mert Koçak</q-item-label>
          <q-item-label caption>
            {{post.location}}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />
       <q-img
        :src="post.img"
      />

      <q-card-section>
        <div class="text-caption">{{post.caption}}</div>
        <div class="text-subtitle2 text-grey-7">{{post.date | convertDate}}</div>
      </q-card-section>
    </q-card>
  </div>
   <div class="col-4 large-screen">
     <q-item class="fixed">
        <q-item-section avatar>
          <q-avatar size="50px">
            <img src="https://i.pinimg.com/originals/55/55/87/555587aa4cd4a2822dc7a06e70ca998f.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold">mertfor4_dev</q-item-label>
          <q-item-label caption>
            Mert Koçak
          </q-item-label>
        </q-item-section>
      </q-item>
  </div>
</div>



  </q-page>
</template>

<script>
import { date } from 'quasar'
export default {
  name: 'AbyssHome',
  data() {
    return {
      posts: [
        {
          id: 1,
          caption: 'Welcome to abyss',
          date: 1620931763585,
          location: 'Tokyo, Japan',
          img: 'https://www.hisglobal.com.tr/assets/images/uploads/1583759608.jpg'
        },
        {
          id: 2,
          caption: 'Welcome to abyss',
          date: 1620931763585,
          location: 'Tokyo, Japan',
          img: 'https://res.cloudinary.com/turna/image/upload/v1562627222/Tokyo_xedmvo.jpg'
        },
        {
          id: 3,
          caption: 'Welcome to abyss',
          date: 1620931763585,
          Location: 'Tokyo, Japan',
          img: 'https://cdn.gezbegen.com/wp-content/uploads/2020/02/tokyo-3.jpg'
        },
        {
          id: 4,
          caption: 'Welcome to abyss',
          date: 1620931763585,
          Location: 'Tokyo, Japan',
          img: 'https://cdn.gezbegen.com/wp-content/uploads/2020/02/tokyo-2.jpg'
        }
      ]
    }
  },
  filters: {
    convertDate(value) {
      return date.formatDate(value, 'MMMM D h:mmA')
    }
  }
}
</script>

<style lang="sass">
.card-post
    .q-img
      min-height: 200px
</style>
