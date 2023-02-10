import { InputHTMLAttributes } from 'react';

export type InputTextProps = {
  name: string;
  label?: string;
  type?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
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
  <div>
    {!!label && (
      <span>
        <label>{label}</label>
      </span>
    )}
    <div>{!!icon && <div>{icon}</div>}</div>
    <input
      type={type}
      name={name}
      {...register(name, { required: true })}
      {...rest}
    />
  </div>
);
