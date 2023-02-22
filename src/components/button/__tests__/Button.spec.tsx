import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../utils/tests/helpers';
import { Button } from '../Button';
import '@testing-library/jest-dom';

describe('button', () => {
  it('should render the medium button by default', () => {
    renderWithTheme(<Button>Button</Button>);
    expect(screen.getByRole('button', { name: /Button/i })).toBeInTheDocument();
  });
  it('should render the small button', () => {
    renderWithTheme(<Button size="xsmall">Button</Button>);
    expect(screen.getByRole('button', { name: /Button/i })).toBeInTheDocument();
  });
});
