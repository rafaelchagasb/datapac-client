<template>
    <div class="items-start">
      <div class="q-pa-md  q-gutter-md">

        <q-input outlined v-model="barcode" label="Bar code" />

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
      barcode: null,
      printer: null,
      client: null,
      location: null,
      room: null,
      description: null,
      optionsPrinters: [],
      optionsClients: []
    }
  },
  methods: {
    savePrinter: async function() {

      if(!this.barcode) {
        this.$notify.warn("Barcode is required");
        return;
      }
      
      if(!this.printer) {
        this.$notify.warn("Model is required");
        return;
      }

      if(!this.client) {
        this.$notify.warn("Client is required");
        return;
      }

      if(!this.location) {
        this.$notify.warn("Location is required");
        return;
      }

      const data = {
        barcode: this.barcode,
        model: this.printer.value,
        client:	this.client.value,
        location: this.location,
        room: this.room,
        description: this.description
      }

      let printerSaved = (await this.$api.printer.post(data));
      
      this.$notify.success('Printed saved');

      this.$router.push({ path: `edit/${printerSaved.id}` });
    },
    fill() {
      this.fillModels();
      this.fillClients();
    }, 
    async fillModels() {
      let data = (await this.$api.modelPrinter.read());

      if(data) {
        this.optionsPrinters = data.map(x => ({
          label: x.description,
          value: x.id
        }));
      }
    },
    async fillClients() {
      let data = (await this.$api.client.read());

      if(data) {
        this.optionsClients = data.map(x => ({
          label: x.description,
          value: x.id
        }));
      }
    }
  },
  async created() {
    await this.fill();
  }
};
</script>
