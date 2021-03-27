<template>
    <div class="q-pa-md items-start q-gutter-md">
        <div class="col-12">
            <q-input outlined label="Search">
                <template v-slot:prepend>
                <q-icon name="search" />
                </template>
                <template v-slot:append>
                <q-icon name="close" @click="text = ''" class="cursor-pointer" />
                </template>
            </q-input>
        </div>

        <div class="col-12">
            <q-btn label="Scan Bar Code" color="blue" @click="goScan" />
        </div>

        <q-card class="col-12 my-card" flat bordered>
            <q-card-section horizontal @click="openPrinter">
                <q-img
                    class="col-3"
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

        <q-card class="col-12 my-card" flat bordered>
            <q-card-section horizontal @click="openPrinter">
                <q-img
                    class="col-3"
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
            <q-btn fab icon="add" color="blue" @click="newPrinter" />
        </q-page-sticky>
    </div>
</div>
</template>

<script>
export default { 
  name: 'Printer_List',
  methods: {
      openPrinter: function() {
        this.$router.push('printer/edit');
      },
      newPrinter: function() {
        this.$router.push('printer/new');
      },
      goScan: function() {
        this.$router.push('printer/scan');
      }
  }
};
</script>
