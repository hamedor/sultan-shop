export let callCount = 0;

const generateBarcode = (barcodes: number[], limit?: number): number => {
    const min = 100000;
    const max = 999999;
    callCount++
    const number = Math.floor(Math.random() * (max - min + 1)) + min;

    if (barcodes.includes(number)) {
      if (limit !== undefined && limit > 0) {
        return generateBarcode(barcodes, limit - 1);
      } else if (limit === undefined) {
        return generateBarcode(barcodes);
      } 
    }
    return number;
  };
  export default generateBarcode;