import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Sort from './sort';


const items = [
    {
      image: 'imageB',
      title: 'B',
      sizeType: 'typeB',
      size: 2,
      barcode: 222,
      producer: 'producerB',
      brand: 'brandB',
      description: 'descriptionB',
      price: 100,
      category: ['categoryB1', 'categoryB2']
    },
    {
      image: 'imageA',
      title: 'A',
      sizeType: 'typeA',
      size: 1,
      barcode: 111,
      producer: 'producerA',
      brand: 'brandA',
      description: 'descriptionA',
      price: 200,
      category: ['categoryA1', 'categoryA2']
    },
    {
      image: 'imageC',
      title: 'C',
      sizeType: 'typeC',
      size: 3,
      barcode: 333,
      producer: 'producerC',
      brand: 'brandC',
      description: 'descriptionC',
      price: 150,
      category: ['categoryC1', 'categoryC2']
    }
  ];


describe('Sort', () => {
    test('сортировка по возрастанию по имени', () => {
     
      const setSortedItems = jest.fn();
      render(<Sort items={items} setSortedItems={setSortedItems} />);
      expect(setSortedItems).toHaveBeenCalledWith([
        {
            image: 'imageA',
            title: 'A',
            sizeType: 'typeA',
            size: 1,
            barcode: 111,
            producer: 'producerA',
            brand: 'brandA',
            description: 'descriptionA',
            price: 200,
            category: ['categoryA1', 'categoryA2']
          },
          {
            image: 'imageB',
            title: 'B',
            sizeType: 'typeB',
            size: 2,
            barcode: 222,
            producer: 'producerB',
            brand: 'brandB',
            description: 'descriptionB',
            price: 100,
            category: ['categoryB1', 'categoryB2']
          },
          {
            image: 'imageC',
            title: 'C',
            sizeType: 'typeC',
            size: 3,
            barcode: 333,
            producer: 'producerC',
            brand: 'brandC',
            description: 'descriptionC',
            price: 150,
            category: ['categoryC1', 'categoryC2']
          }
      ]);
    });
    test('сортировка по убыванию по имени', () => {
     
        const setSortedItems = jest.fn();
        render(<Sort items={items} setSortedItems={setSortedItems} />);
        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'titleDown' } });
        expect(setSortedItems).toHaveBeenCalledWith([
            {
                image: 'imageC',
                title: 'C',
                sizeType: 'typeC',
                size: 3,
                barcode: 333,
                producer: 'producerC',
                brand: 'brandC',
                description: 'descriptionC',
                price: 150,
                category: ['categoryC1', 'categoryC2']
            },
            {
                image: 'imageB',
                title: 'B',
                sizeType: 'typeB',
                size: 2,
                barcode: 222,
                producer: 'producerB',
                brand: 'brandB',
                description: 'descriptionB',
                price: 100,
                category: ['categoryB1', 'categoryB2']
            },    
            {
                image: 'imageA',
                title: 'A',
                sizeType: 'typeA',
                size: 1,
                barcode: 111,
                producer: 'producerA',
                brand: 'brandA',
                description: 'descriptionA',
                price: 200,
                category: ['categoryA1', 'categoryA2']
            },
        ]);
      });
      test('сортировка по возрастанию цены', () => {
     
        const setSortedItems = jest.fn();
        render(<Sort items={items} setSortedItems={setSortedItems} />);
        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'priceUp' } });
        expect(setSortedItems).toHaveBeenCalledWith([
            {
                image: 'imageB',
                title: 'B',
                sizeType: 'typeB',
                size: 2,
                barcode: 222,
                producer: 'producerB',
                brand: 'brandB',
                description: 'descriptionB',
                price: 100,
                category: ['categoryB1', 'categoryB2']
            },      
            {
                image: 'imageC',
                title: 'C',
                sizeType: 'typeC',
                size: 3,
                barcode: 333,
                producer: 'producerC',
                brand: 'brandC',
                description: 'descriptionC',
                price: 150,
                category: ['categoryC1', 'categoryC2']
            },
            {
                image: 'imageA',
                title: 'A',
                sizeType: 'typeA',
                size: 1,
                barcode: 111,
                producer: 'producerA',
                brand: 'brandA',
                description: 'descriptionA',
                price: 200,
                category: ['categoryA1', 'categoryA2']
            },
        ]);
      });
      test('сортировка по убыванию цены', () => {
     
        const setSortedItems = jest.fn();
        render(<Sort items={items} setSortedItems={setSortedItems} />);
        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'priceDown' } });
        expect(setSortedItems).toHaveBeenCalledWith([
            {
                image: 'imageA',
                title: 'A',
                sizeType: 'typeA',
                size: 1,
                barcode: 111,
                producer: 'producerA',
                brand: 'brandA',
                description: 'descriptionA',
                price: 200,
                category: ['categoryA1', 'categoryA2']
            },
            {
                image: 'imageC',
                title: 'C',
                sizeType: 'typeC',
                size: 3,
                barcode: 333,
                producer: 'producerC',
                brand: 'brandC',
                description: 'descriptionC',
                price: 150,
                category: ['categoryC1', 'categoryC2']
            },
            {
                image: 'imageB',
                title: 'B',
                sizeType: 'typeB',
                size: 2,
                barcode: 222,
                producer: 'producerB',
                brand: 'brandB',
                description: 'descriptionB',
                price: 100,
                category: ['categoryB1', 'categoryB2']
            },  
        ]);
      }); 


  });