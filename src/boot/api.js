import PrinterApi from '../api/printer-api';
import ModelPrinterApi from '../api/model-printer-api';
import ClientApi from '../api/client-api';

const apis = {
    printer: new PrinterApi(),
    modelPrinter: new ModelPrinterApi(),
    client: new ClientApi()
}

export default async ({ Vue }) => {
    Vue.prototype.$api = apis;
}


