<template>
  <div>
    <v-quagga :onDetected="logIt" :readerSize="readerSize" :readerTypes="['code_128_reader']"></v-quagga>
  </div>
</template>

<script>

export default {
  name: 'VueBarcodeTest',
  data () {
    return {
      readerSize: {
        width: 640,
        height: 480
      },
      detecteds: []
    }
  },
  methods: {
    logIt (data) {
      console.log(data);
      alert(data.codeResult.code)
    }
  }
}
</script>