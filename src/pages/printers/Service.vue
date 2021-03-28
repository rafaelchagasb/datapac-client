<template>
     <div class="items-start">
        <div class="q-pa-md  q-gutter-md">

          <q-select
            filled
            v-model="tonner"
            multiple
            :options="optionsTonner"
            use-chips
            stack-label
            label="Tonner"
          />

          <q-select
            filled
            v-model="drum"
            multiple
            :options="optionsDrum"
            use-chips
            stack-label
            label="Drum"
          />
          
          <q-select
            filled
            v-model="trays"
            multiple
            :options="optionsTrays"
            use-chips
            stack-label
            label="Trays"
          />

          <q-checkbox v-model="tonnerCollection" label="Tonner Collection Unit" />

          <q-checkbox v-model="fuser" label="Fuser" />
          
          <q-checkbox v-model="adfRollers" label="ADF Rollers " />

          <q-input
            label="Description" 
            v-model="description"
            outlined
            type="textarea"
          />
          <div class="row">
            <q-uploader
              url="http://localhost:4444/upload"
              label="Photos"
              multiple
              batch
              class="col-12"
            />
          </div>
          
        </div>

        <q-footer class="shadow-up-5">
          <q-btn class="col-12 q-pa-md full-width" color="blue" label="Save"  @click="saveService" />
        </q-footer>
    </div>
</div>
</template>

<script>
export default {
  name: 'Printer_Service',
  data() {
      return {
          tonner: null,
          drum: null,
          tonnerCollection: false,
          fuser: false,
          adfRollers: false,
          trays: null,
          description: null,
          optionsTonner: [ 'Black', 'Yellow', 'Cyan', 'Magenta' ],
          optionsDrum: [ 'Black', 'Yellow', 'Cyan', 'Magenta' ],
          optionsTrays: [ 'Tray 1', 'Tray 2', 'Tray 3', 'Tray 4' ]

      }
  },
  methods: {
    saveService: function() {
      this.$notify.success("Saved service");
    }
  }
};
</script>
