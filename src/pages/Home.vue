<template>
<q-page class="container q-pa-md">
   <q-banner v-if="this.errorMessage" dense inline-actions class="text-white bg-red q-mb-lg q-pa-md">
      {{ errorMessage }}
    </q-banner>
<div class="row q-col-gutter-lg">
  <div class="col-12 col-sm-8">
     <template v-if="!this.loading && posts.length">
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
            :src="post.imageUrl"
           />

          <q-card-section>
           <div class="text-caption">{{post.caption}}</div>
            <div class="text-subtitle2 text-grey-7">{{post.date | convertDate}}</div>
           </q-card-section>
        </q-card>
     </template>
     <template v-else-if="!this.loading && !this.posts.length">
       <h5 class="text-center text-grey">Be the first one to post</h5>
     </template>
     <template v-else>
      <q-card flat bordered>
        <q-item>
          <q-item-section avatar>
            <q-skeleton type="QAvatar" animation="fade" size="40px" />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              <q-skeleton type="text" animation="fade" />
            </q-item-label>
            <q-item-label caption>
              <q-skeleton type="text" animation="fade" />
            </q-item-label>
          </q-item-section>
      </q-item>

        <q-skeleton height="200px" square animation="fade" />

        <q-card-section>
          <q-skeleton type="text" class="text-subtitle2" animation="fade" />
          <q-skeleton type="text" width="50%" class="text-subtitle2" animation="fade" />
        </q-card-section>
      </q-card>
     </template>
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

      ],
      errorMessage: '',
      loading: false
    }
  },
  methods: {
    getPosts() {
      this.loading = true
     this.$axios.get(`${process.env.API}/posts`)
     .then((res) => {
       this.posts = res.data
       this.loading = false
     })
     .catch((err) => {
       this.errorMessage = err.message
       this.loading = false
     })
    }
  },
  filters: {
    convertDate(value) {
      return date.formatDate(value, 'MMMM D h:mmA')
    }
  },
  created() {
    this.getPosts();
  }
}
</script>

<style lang="sass">
.card-post
    .q-img
      min-height: 200px
</style>
