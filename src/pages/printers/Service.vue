<template>
    <div class="q-pa-md items-start q-gutter-md">

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
          optionsTonner: [ 'Black', 'Yellow', 'Cyan', 'Magenta' ],
          optionsDrum: [ 'Black', 'Yellow', 'Cyan', 'Magenta' ],
          optionsTrays: [ 'Tray 1', 'Tray 2', 'Tray 3', 'Tray 4' ]

      }
  }
};
</script>
