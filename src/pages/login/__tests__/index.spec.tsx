import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputText } from '../../../components/input/input-text/InputText';

describe('InputText', () => {
  test('renders with label', () => {
    render(<InputText name="email" label="Email" control={{}} />);
    const label = screen.getByLabelText('Email');
    expect(label).toBeInTheDocument();
  });

  test('renders without label', () => {
    render(<InputText name="email" control={{}} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  test('calls onChange and onBlur', () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    render(
      <InputText
        name="email"
        control={{}}
        onChange={onChange}
        onBlur={onBlur}
      />
    );
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'test@example.com');
    expect(onChange).toHaveBeenCalledTimes(16);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  test('displays error message', () => {
    render(
      <InputText
        name="email"
        control={{}}
        fieldState={{ error: { message: 'Invalid email' } }}
      />
    );
    const errorMessage = screen.getByText('Invalid email');
    expect(errorMessage).toBeInTheDocument();
  });
});
