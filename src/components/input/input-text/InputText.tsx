import { InputHTMLAttributes } from 'react';
import * as s from './input-text.styles';

export type InputTextProps = {
  name: string;
  label?: string;
  type?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  tooltipContent?: string;
  register?: any;
} & InputHTMLAttributes<HTMLInputElement>;

const InputText = ({
  name,
  label,
  type = 'text',
  icon,
  iconPosition = 'left',
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
      {!!icon && <s.IconWrapper>{icon}</s.IconWrapper>}
      <s.InputText
        type={type}
        name={name}
        {...register(name, { required: true })}
        {...rest}
      />
    </s.InputWrapper>
  </s.Wrapper>
);

export { InputText };
