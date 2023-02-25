import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputText, InputTextProps } from './InputText';
import { useForm } from 'react-hook-form';
import { renderWithTheme } from '../../../utils/tests/helpers';

describe('InputText', () => {
  const defaultProps: InputTextProps = {
    name: 'input',
    label: 'Input Label',
    variant: 'outOfFocus',
    type: 'text'
  };
  const mockOnChange = jest.fn();
  const mockControl = useForm({
    defaultValues: { [defaultProps.name]: '' },
    shouldUnregister: false
  }).control;

  it('renders label text correctly', () => {
    renderWithTheme(
      <InputText
        {...defaultProps}
        control={mockControl}
        onChange={mockOnChange}
        variant="outOfFocus"
      />
    );

    const label = screen.getByLabelText('FieldText component');
    expect(label).toHaveTextContent('Input Label');
  });

  it('renders input with correct type', () => {
    renderWithTheme(
      <InputText
        {...defaultProps}
        type="email"
        control={mockControl}
        onChange={mockOnChange}
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
  });

  /* it('calls onChange when input value is changed', () => {
    const mockOnChange = jest.fn();
    const mockControl = useForm({
      defaultValues: { [defaultProps.name]: '' },
      shouldUnregister: false
    }).control;

    renderWithTheme(
      <InputText
        {...defaultProps}
        control={mockControl}
        onChange={mockOnChange}
      />
    );

    const input = screen.getByLabelText('FieldText component');
    userEvent.type(input, 'test');

    expect(mockOnChange).toHaveBeenCalledTimes(4);
  });

  it('displays error message when input is invalid', async () => {
    const errorText = 'Invalid input';

    const mockControl = useForm({
      defaultValues: { [defaultProps.name]: '' },
      shouldUnregister: false
    }).control;

    renderWithTheme(<InputText {...defaultProps} control={mockControl} />);

    const input = screen.getByLabelText('FieldText component');

    await userEvent.type(input, '{selectall}{backspace}invalid-value');

    const error = screen.getByText(errorText);
    expect(error).toBeInTheDocument();
    const formState = mockControl._formState;
    expect(formState.isValid).toBe(false);
  }); */
});
