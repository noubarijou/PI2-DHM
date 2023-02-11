import { InputHTMLAttributes } from 'react';
import * as s from './input-text.styles';

export type InputTextProps = {
  name: string;
  label?: string;
  type?: string;
  register?: any;
  variant?: 'outOfFocus' | 'focusWithin' | 'validationError';
} & InputHTMLAttributes<HTMLInputElement>;

const InputText = ({
  name,
  label,
  type = 'text',
  variant = 'outOfFocus',
  register,
  ...rest
}: InputTextProps) => (
  <s.Wrapper aria-label="FieldText component">
    {!!label && (
      <s.LabelWrapper aria-label="FieldText component">
        <s.Label>{label}</s.Label>
      </s.LabelWrapper>
    )}
    <s.InputWrapper>
      <s.InputText
        type={type}
        name={name}
        variant={variant}
        /* {...register(name, { required: true })}*/
        {...rest}
      />
    </s.InputWrapper>
  </s.Wrapper>
);

export { InputText };
