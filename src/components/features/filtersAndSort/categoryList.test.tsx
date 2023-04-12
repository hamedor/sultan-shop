import { render, screen ,fireEvent } from '@testing-library/react';
import CategoryList from '../filtersAndSort/categoryList';


const categories = ['Уход за лицом', 'Уход за волосами'];

describe('CategoryList', () => {
  test('отрисовывается список категорий', () => {
     render(
      <CategoryList vertical={true} categories={categories} setSelectedCategory={() => {}} />
    );

    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  test('хук setSelectedCategory вызывается по клику на категорию', () => {

    const setSelectedCategory = jest.fn();

     render(
      <CategoryList
        vertical={true}
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />
    );

    fireEvent.click(screen.getByText('Уход за лицом'));
    expect(setSelectedCategory).toHaveBeenCalledWith('Уход за лицом');
  });
});