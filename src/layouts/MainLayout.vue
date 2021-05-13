<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-grey-10" bordered>
      <q-toolbar class="container">
        <q-btn class="large-screen text-grey-10 q-ml-md" to="/" flat round color="primary" size="18px" icon="eva-home-outline" dense/>
        <q-separator  inset />
        <q-toolbar-title class="text-parisienne text-bold">
          Abyssal
        </q-toolbar-title>
        <q-btn class="large-screen text-grey-10 q-mr-md" to="/camera" flat round color="primary" size="18px" icon="eva-camera-outline" dense/>
      </q-toolbar>
    </q-header>

    <q-footer class="bg-white small-screen" bordered>
      <q-tabs class="text-grey-10" active-color="primary" indicator-color="transparent">
        <q-route-tab to="/"  icon="eva-home-outline"  />
        <q-route-tab to="/camera"  icon="eva-camera-outline"  />
      </q-tabs>
    </q-footer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


export default {
  name: 'MainLayout',
  data () {
    return {

    }
  }
}
</script>

<style lang="sass">
  .q-toolbar__title
    font-size: 25px
    @media (max-width: $breakpoint-xs-max)
     text-align: center


  .q-footer
    .q-tab__icon
      font-size: 30px
</style>
