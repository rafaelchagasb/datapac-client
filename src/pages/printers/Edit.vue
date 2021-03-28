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

        <div v-if="printer" class="q-pa-md items-start q-gutter-md">
            
            <q-card class="q-pl-md full-width my-card" flat bordered v-if="tab == 'information'">
            <q-card-section >
                <q-img
                    class="col-2"
                    :src="printer.model.imageUrl"
                />
                <q-card-section class="q-pt-xs">
                    <div class="caption">
                        <div>
                            <q-icon name="fas fa-barcode" />
                            {{ printer.barcode }}
                        </div>
                        <div>
                            <q-icon name="room" />
                            {{ printer.location }} > {{ printer.room }}
                        </div>
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
  meta: {
    title: 'Index Page',
  },
  data() {
      return {
          tab: 'information',
          printer: null
      }
  },
  methods: {
      newService: function() {
        this.$router.push({ name: 'service_new' });
      }
  },
  async mounted() {
    const  { id } = this.$route.params;
    this.printer = await this.$api.printer.getById(id);
  }
};
</script>
