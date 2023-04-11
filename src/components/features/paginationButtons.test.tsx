import { render, fireEvent, screen } from '@testing-library/react';
import PaginationButtonsButton from './paginationButtonsButton';


describe('PaginationButtons component', () => {
    test('клик по кнопке left вызывает функцию pageDown', () => {
        const pageDown = jest.fn();
        render(<PaginationButtonsButton clickF={pageDown} direction='left'/>);
        const leftButton = screen.getByTestId('left');
        fireEvent.click(leftButton);
        expect(pageDown).toHaveBeenCalled();
    });
    
    test('клик по кнопке right вызывает функцию pageUp', () => {
        const pageUp = jest.fn();
        render(<PaginationButtonsButton clickF={pageUp} direction='right'/>);
        const leftButton = screen.getByTestId('right');
        fireEvent.click(leftButton);
        expect(pageUp).toHaveBeenCalled();
    });
});

