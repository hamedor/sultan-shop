import { render ,screen, fireEvent} from '@testing-library/react';
import ItemAndForm from './itemAndForm';


const mockSetItems = jest.fn();
const mockCategories = ['Category 1', 'Category 2'];



describe('MyComponent', () => {
 
    test('отрисовка компонента TotalForm при alwaysShowTotalForm и adminMode === true', () => {
    render(<ItemAndForm  setItems={mockSetItems} categories={mockCategories}  alwaysShowTotalForm={true} adminMode={true} />);
      expect(screen.getByTestId('form')).toBeInTheDocument();
    });
  
    test('отсутствие отрисовки компонента TotalForm при alwaysShowTotalForm и adminMode === false', () => {
      render(<ItemAndForm setItems={mockSetItems} categories={mockCategories}  alwaysShowTotalForm={false} adminMode={false} />);
      expect(screen.queryByTestId('form')).not.toBeInTheDocument();
    });
  });