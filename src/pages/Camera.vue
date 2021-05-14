<template>
  <q-page class="container-2 q-pa-md">
    <div class="camera-frame q-pa-md">
      <img class="full-width" src="https://www.howtogeek.com/wp-content/uploads/2015/02/digital-camera.jpg?width=1200&trim=1,1&bg-color=000&pad=1,1" alt="camera icon">
    </div>
    <div class="text-center q-pa-md">
      <q-btn round color="black" size="16px" icon="eva-camera" />
      <div class="row justify-center q-ma-md">
        <q-input v-model="post.caption" class="col col-sm-6" label="Caption" dense/>
      </div>
      <div class="row justify-center q-ma-md">
        <q-input v-model="post.location" class="col col-sm-6" label="Location" dense>
          <template v-slot:append>
            <q-btn round dense flat icon="place" />
          </template>
        </q-input>
      </div>
      <div class="row justify-center q-mt-lg">
        <q-btn unelevated rounded color="primary" label="Share" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { uid } from 'quasar'

export default {
  name: 'Camera',
  data () {
    return {
      post: {
        id: uid(),
        caption: '',
        location: '',
        photo: null,
        date: Date.now()
      }
    }
  }
}
</script>

<style lang="sass">
  .camera-frame
    border: 2px solid $grey-10
    border-radius: 10px

</style>
