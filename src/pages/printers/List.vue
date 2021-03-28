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

        <q-card v-for="printer in printers" :key="printer.id" class="col-12 my-card" flat bordered>
            <q-card-section horizontal @click="openPrinter(printer.id)">
                <q-img
                    class="col-3"
                    :src="printer.model.imageUrl"
                />
                <q-card-section class="q-pt-xs">
                    <div class="text-h5 q-mt-sm q-mb-xs">{{ printer.model.description }}</div>
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

        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab icon="add" color="blue" @click="newPrinter" />
        </q-page-sticky>
    </div>
</div>
</template>

<script>
export default { 
  name: 'Printer_List',
  data() {
      return {
          printers: []
      }
  },
  methods: {
      openPrinter: function(id) {
        this.$router.push({ path: `printer/edit/${id}` });
      },
      newPrinter: function() {
        this.$router.push('printer/new');
      },
      goScan: function() {
        this.$router.push('printer/scan');
      }
  },
  async mounted() {
      this.printers = await this.$api.printer.read();
  }
};
</script>
