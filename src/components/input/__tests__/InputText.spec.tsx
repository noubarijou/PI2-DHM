import { renderWithTheme } from '../../../utils/tests/helpers';
import { InputText } from '../input-text/InputText';
import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

describe('button', () => {
  describe('InputText', () => {
    const mockControl = {
      control: {},
      name: 'test',
      field: {
        onChange: jest.fn(),
        onBlur: jest.fn(),
        value: ''
      },
      fieldState: {
        error: null,
        isDirty: false
      }
    };

    it('should render the component', async () => {
      renderWithTheme(
        <InputText name="test" label="Test Label" control={mockControl} />
      );
      const inputs = screen.getAllByLabelText('FieldText component');
      await expect(inputs)[0].toBeInTheDocument();
    });
    /* 
    it('should call onChange when input value changes', () => {
      const { getByRole } = render(
        <InputText name="test" control={mockControl} />
      );
      const input = getByRole('textbox');
      fireEvent.change(input, { target: { value: 'Test Value' } });
      expect(mockControl.field.onChange).toHaveBeenCalledWith('Test Value');
    });

    it('should call onBlur when input loses focus', () => {
      const { getByRole } = render(
        <InputText name="test" control={mockControl} />
      );
      const input = getByRole('textbox');
      fireEvent.blur(input);
      expect(mockControl.field.onBlur).toHaveBeenCalled();
    });

    it('should display an error message when fieldState.error is not null', () => {
      const { getByText } = render(
        <InputText
          name="test"
          control={{
            ...mockControl,
            fieldState: {
              error: { message: 'Test Error' },
              isDirty: true
            }
          }}
        />
      );
      expect(getByText('Test Error')).toBeInTheDocument();
    });*/
  });
});
