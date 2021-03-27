<template>
    <div class="q-pa-md items-start q-gutter-md">
      <q-select outlined v-model="printer" :options="optionsPrinters" label="Model" />

      <q-select outlined v-model="client" :options="optionsClients" label="Client" />

      <q-input outlined v-model="location" label="Location" />

      <q-input
        label="Description" 
        v-model="description"
        outlined
        type="textarea"
      />
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
  }
};
</script>
