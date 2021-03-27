<template>
    <div>
        <!-- <q-header reveal elevated>
            <q-toolbar>
            <q-btn flat round dense icon="menu" class="q-mr-sm" />
            <q-avatar>
                <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
            </q-avatar>

            <q-toolbar-title>Quasar Framework</q-toolbar-title>

            <q-btn flat round dense icon="whatshot" />
            </q-toolbar>
        </q-header> -->

         
        
        <div class="q-pa-md items-start q-gutter-md">
            <q-card class="q-pl-md full-width my-card" flat bordered v-if="tab == 'information'">
            <q-card-section >
                <q-img
                    class="col-2"
                    src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06264658.png"
                />
                <q-card-section class="q-pt-xs">
                    <div class="text-h5 q-mt-sm q-mb-xs">HP Color Laserjet E87640</div>
                    <div class="text-caption text-grey">
                            <q-icon name="room" />
                        Trinity College Dublin > Dublin > Room 5
                    </div>
                </q-card-section>
            </q-card-section>
            </q-card>
        </div>
       
        <q-footer>
            <q-tabs
                v-model="tab"
                class="bg-blue text-white"
            >
                <q-tab name="information" label="Information"/>
                <q-tab name="services" label="Services"/>
            </q-tabs>
        </q-footer>

        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab icon="note_add" color="blue" @click="newService" />
        </q-page-sticky>
    </div> 
</div>
</template>

<script>
export default {
  name: 'Printer_Edit',
  data() {
      return {
          tab: 'information'
      }
  },
  methods: {
      newService: function() {
        this.$router.push('service');
      }
  }
};
</script>
