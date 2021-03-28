<template>
  <div class="items-start" ref="prev">
      <div class="q-pa-md  q-gutter-md">
        <q-input outlined v-model="barcode" label="Bar code" readonly />
      </div>
      
      <div class="q-pa-md  q-gutter-md">
        <v-quagga v-if="!barcode" class="col-12" :onDetected="logIt" :readerTypes="['code_128_reader']"></v-quagga>
      </div>

      <q-footer class="shadow-up-5">
        <q-btn class="col-12 q-pa-md full-width" color="blue" label="Rescan"  @click="rescan" />
      </q-footer>


    </div>
  </div>
</template>

<script>

export default {
  name: 'VueBarcodeTest',
  data () {
    return {
      width: null,
      barcode: null,
      aspectRatio: { min: 1, max: 2 },
      detecteds: []
    }
  },
  methods: {
    logIt (data) {
      this.barcode = data.codeResult.code;

      this.findPrinter(this.barcode);
    },
    async findPrinter(barcode) {
      const printer = await this.$api.printer.getByBarcode(barcode);

      if(!printer) {
        this.$notify.warn("Dont find printer with barcode");
      } else{
        this.$router.push({ path: `edit/${printer.id}`});
      }
    },
    rescan() {
      this.barcode = null;
    }
  },
  mounted() {
  }
}
</script>