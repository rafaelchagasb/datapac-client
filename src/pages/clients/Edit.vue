<template>
    <div>
        <div v-if="client" class="q-pa-md items-start q-gutter-md">
            <q-input
                filled
                v-model="client.description"
                label="Name"
                readonly
            />

            <q-input
                filled
                v-model="client.address"
                label="Address"
                readonly
            >
                <template v-slot:prepend>
                    <q-icon name="room" />
                </template>
            </q-input>

            <q-input
                filled
                v-model="client.phone"
                label="Phone"
                readonly
            >
                <template v-slot:prepend>
                    <q-icon name="phone" />
                </template>
            </q-input>

            <q-input
                filled
                v-model="client.email"
                label="Email"
                readonly
            >
                <template v-slot:prepend>
                    <q-icon name="email" />
                </template>
            </q-input>
        </div>
    </div> 
</div>
</template>

<script>
export default {
  name: 'Client_Edit',
  data() {
      return {
          client: null
      }
  },
  methods: {
      
  },
  async mounted() {
    const  { id } = this.$route.params;
    this.client = await this.$api.client.getById(id);
  }
};
</script>
