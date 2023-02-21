import React from 'react';
import { render, screen } from '@testing-library/react';
import { InputText, InputTextProps } from '../input-text/InputText';
import { useForm } from 'react-hook-form';
import userEvent from '@testing-library/user-event';

describe('InputText', () => {
  const props: InputTextProps = {
    name: 'test',
    label: 'Test',
    type: 'text',
    variant: 'outOfFocus'
  };

  it('renders the label and input', () => {
    render(<InputText {...props} />);
    expect(screen.getByLabelText('Test')).toBeInTheDocument();
    expect(screen.getByRole('input')).toBeInTheDocument();
  });

  /*  it('displays the error message', async () => {
    const { container } = render(
      <InputText {...props} control={useForm().control} />
    );
    const input = container.querySelector('input');
    await userEvent.type(input, 'invalid value');
    expect(screen.getByText('Invalid value')).toBeInTheDocument();
  }); */
});
