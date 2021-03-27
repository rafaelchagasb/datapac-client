<template>
    <div class="q-pa-md items-start q-gutter-md">
        <q-card class="q-pl-md full-width my-card" flat bordered>
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
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab icon="note_add" color="blue" @click="newService" />
        </q-page-sticky>
    </div> 
</div>
</template>

<script>
export default {
  name: 'Printer_Edit',
  methods: {
      newService: function() {
        this.$router.push('service');
      }
  }
};
</script>
