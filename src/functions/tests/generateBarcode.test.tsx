import generateBarcode from '../../functions/generateBarcode';
import { callCount } from '../../functions/generateBarcode';

const generateRandomNumbers = (number:number) => {
    const min = 100000;
    const max = 999999;
    const numbers: number[] = [];
  
    for (let i = 0; i < number; i++) {
      const number = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.push(number);
    }
  
    return numbers;
  };

  const fillArray = () => {
    const arr = [];
    for (let i = 100000; i <= 999999; i++) {
      arr.push(i);
    }
    return arr;
  };


  describe('generateBarcode', () => {
    test('генерация уникального баркода', () => {
      const barcodes = generateRandomNumbers(1000);
  
      const newBarcode = generateBarcode(barcodes);

      expect(barcodes.includes(newBarcode)).toBe(false);
    })
    test('вызов функции снова, если баркод не уникален', () => {
        const barcodes = fillArray();
  
        const limit = 1; 
        
        generateBarcode(barcodes, limit);
    
        expect(callCount).toBe(3);
   
      });
    
  });