import ApiBase from './api-base';

class PrinterApi extends ApiBase {
  constructor() {
    super('printer');
  }

  getByBarcode = async (barcode) =>  (await this.http.get(`/barcode/${barcode}`)).data;
}

export default PrinterApi;
