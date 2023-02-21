import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputText, InputTextProps } from './InputText';
import { useForm } from 'react-hook-form';

describe('InputText', () => {
  const defaultProps: InputTextProps = {
    name: 'input',
    label: 'Input Label'
  };

  it('renders label text correctly', () => {
    render(<InputText {...defaultProps} />);

    const label = screen.getByLabelText('FieldText component');
    expect(label).toHaveTextContent('Input Label');
  });

  it('renders input with correct type', () => {
    render(<InputText {...defaultProps} type="email" />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('calls onChange when input value is changed', () => {
    const mockOnChange = jest.fn();
    const mockControl = useForm({
      defaultValues: { [defaultProps.name]: '' },
      shouldUnregister: false
    }).control;

    render(
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

    render(<InputText {...defaultProps} control={mockControl} />);

    const input = screen.getByLabelText('FieldText component');

    await userEvent.type(input, '{selectall}{backspace}invalid-value');

    const error = screen.getByText(errorText);
    expect(error).toBeInTheDocument();
    const formState = mockControl._formState;
    expect(formState.isValid).toBe(false);
  });
});
