<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header bordered class="bg-white text-primary">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <img @click="goHome"
            class="q-mt-md"
            alt="Quasar logo"
            src="~assets/datapac-logo.svg"
            >
        </q-toolbar-title>
      </q-toolbar>
    </q-header> -->
    <q-header>
      <q-toolbar class="bg-blue">
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
        </q-avatar> -->
        <q-toolbar-title class="text-center" v-if="$route.meta.title">
          {{ $route.meta.title }}
        </q-toolbar-title>
        <q-toolbar-title v-else class="text-center">
          Datapac
        </q-toolbar-title>

        </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
        <q-img src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Paul</div>
            <div>Engineer</div>
          </div>
        </q-img>

        <q-list>
          <q-item>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section @click="goTo('/')">
              Home
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon name="print" />
            </q-item-section>
            <q-item-section @click="goTo('/printer')">
              Printer
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon name="assignment_ind" />
            </q-item-section>
            <q-item-section @click="goTo('/client')">
              Clients
            </q-item-section>
          </q-item>
        </q-list>
        
        

    </q-drawer>

    
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
      left: false
    };
  },
  methods: {
    goHome: function() {
      this.$router.push({ path:"/" })
    },
    goTo(path) {
      this.$router.push({ path });
    }
  }
};
</script>
