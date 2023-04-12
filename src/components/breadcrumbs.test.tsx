import React from 'react';
import { render, screen } from '@testing-library/react';
import Breadcrumbs from './breadcrumbs';
import { MemoryRouter } from 'react-router-dom';
import { Item } from '../interfaces';

const breadcrumbs = [
    { label: 'Главная', to: '/' },
    { label: 'Каталог', to: '/catalog'}
  ];

  const item = {       
    image: 'image.jpg',
    title: 'ItemTitle',
    sizeType: 'Type',
    size: 30,
    barcode: 123456789,
    producer: 'Producer',
    brand: 'Brand',
    description: 'Description',
    price: 30,
    category: ['Category'], 
};

describe('Breadcrumbs', () => {
  test('отрисовка хлебмных крошек', () => {

    render(
        <MemoryRouter>
          <Breadcrumbs breadcrumbs={breadcrumbs} item={item} />
        </MemoryRouter>
      );

    expect(screen.getByText('Главная')).toBeInTheDocument();
    expect(screen.getByText('Каталог')).toBeInTheDocument();
    expect(screen.getByText(item.title)).toBeInTheDocument();
   
  });
  test('отсутствие отрисовки item, при еге непередачи в качестве пропса', () => {
    render(
        <MemoryRouter>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </MemoryRouter>
      );
      expect(screen.queryByText(item.title)).not.toBeInTheDocument();
  })
});