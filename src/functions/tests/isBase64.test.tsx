import { render, screen } from '@testing-library/react';
import isBase64 from '../isBase64';

describe('isBase64 function', () => {
    test('для image src используется base64, без относительных путей, если src начинается с data:image', () => {
      const base64Image = 'data:image/png;base64,iVBORw0KGg...';
      render(isBase64(base64Image));
      expect(screen.getByRole('img')).toHaveAttribute('src', base64Image);
    });
});