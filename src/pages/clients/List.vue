<template>
    <div class="q-pa-md items-start q-gutter-md">
        <q-list bordered>
            <q-item  v-for="client in clients" :key="client.id" clickable v-ripple @click="open(client.id)">
                <q-item-section avatar>
                <q-avatar color="primary" text-color="white">
                    {{ client.description.substr(0, 1) }}
                </q-avatar>
                </q-item-section>

                <q-item-section>{{ client.description }} </q-item-section>
            </q-item>
        </q-list>
<!--         
        <q-card class="col-12 my-card" flat bordered>
            <q-card-section horizontal @click="open(client.id)">
                <q-card-section class="q-pt-xs">
                    <div class="text-h5 q-mt-sm q-mb-xs">{{ client.description.model.description }}</div>
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
        </q-card> -->

    </div>
</div>
</template>

<script>
export default { 
  name: 'Client_List',
  data() {
      return {
          clients: []
      }
  },
  methods: {
      open(id) {
          this.$router.push({ path: `client/edit/${id}` })
      }
  },
  async mounted() {
      this.clients = await this.$api.client.read();
  }
};
</script>
