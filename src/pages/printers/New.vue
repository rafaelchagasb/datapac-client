<template>
    <div class="items-start">
      <div class="q-pa-md  q-gutter-md">

        <q-select outlined v-model="printer" :options="optionsPrinters" label="Model" />

        <q-select outlined v-model="client" :options="optionsClients" label="Client" />

        <q-input outlined v-model="location" label="Location" />

        <q-input outlined v-model="room" label="Room" />

        <q-input
          label="Description" 
          v-model="description"
          outlined
          type="textarea"
        />
      </div>

      <q-footer class="shadow-up-5">
        <q-btn class="col-12 q-pa-md full-width" color="blue" label="Save"  @click="savePrinter" />
      </q-footer>
    </div>
</div>
</template>

<script>
export default {
  name: 'Printer_Edit',
  data () {
    return {
      printer: null,
      client: null,
      location: null,
      room: null,
      description: null,
      optionsPrinters: [
        'HP Color LaserJet Managed MFP E87640','HP Color LaserJet Enterprise flow MFP M880', 'HP PageWide Pro 477dw'
      ],
      optionsClients: [
        'Trinity College Dublin (TCD)', 
        'Dublin Airport Authority (DAA)', 
        'Technological University Dublin (TUD)', 
        'Munster Technological University (MTU)' ,
        'Fingal County Council (FCC)'
      ]
    }
  },
  methods: {
    savePrinter: function() {
      this.success('Printed saved');
    }
  }
};
</script>
