<template>
  <q-page class="flex q-pa-md">
      <div class="row">
      <div class="col-12 column justify-between">
        <div class="row q-gutter-lg">
          <div class="q-pa-md">
            <q-btn round color="blue-6" icon="print" size="2.5em" @click="goPrinter" />
              <div class="col-12 q-pt-md text-center">
              Printer
            </div>
          </div>
          <!-- <div class="q-pa-md">
            <q-btn round color="blue-6" icon="description" size="2.5em" />
              <div class="col-12 q-pt-md text-center">
               My prints
            </div>
          </div>
          <div class="q-pa-md">
            <q-btn round color="blue-6" icon="leaderboard" size="2.5em" />
              <div class="col-12 q-pt-md text-center">
              Reports
            </div>
          </div>-->
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  methods: {
    goPrinter: function() {
      this.$router.push({ path: 'printer' })
    }
  }
};
</script>
