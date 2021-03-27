<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-white text-primary">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <img @click="goHome"
            class="q-mt-md"
            alt="Quasar logo"
            src="~assets/datapac-logo.svg"
            >
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data() {
    return {
    };
  },
  methods: {
    goHome: function() {
      this.$router.push({ path:"/" })
    }
  }
};
</script>
