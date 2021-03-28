import { Notify } from 'quasar'

const success = (message) => {
    Notify.create({
        type: 'positive',
        message
    })
}

const error = (message) => {
    Notify.create({
        type: 'negative',
        message
    })
}

const warn = (message) => {
    Notify.create({
        type: 'warning',
        message
    })
}

export default async ({ Vue }) => {
    Vue.prototype.$notify = {
        success,
        error,
        warn
    };
}



// export default async ({ Vue }) => {
//     Vue.mixin({
//         methods: {
            
//         }
//     });
// }