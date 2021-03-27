import { Notify } from 'quasar'

const success = (message) => {
    Notify.create({
        type: 'positive',
        message
    })
}

export default async ({ Vue }) => {
    Vue.mixin({
        methods:{
            success
        }
    });
}