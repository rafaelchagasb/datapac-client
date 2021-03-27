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
          optionsTonner: [ 'Black', 'Yellow', 'Cyan', 'Magenta' ],
          optionsDrum: [ 'Black', 'Yellow', 'Cyan', 'Magenta' ]
      }
  }
};
</script>
