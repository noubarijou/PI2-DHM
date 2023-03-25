import * as s from './button.styles';

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'disabled';
  size?: 'xsmall' | 'medium' | 'large' | 'wallet';
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({ variant = 'primary', isFullWidth = false }: ButtonProps) => {
  return (
    <s.ButtonWrapper variant={variant} isFullWidth={isFullWidth}>
      botão topzera
    </s.ButtonWrapper>
  );
};

export { Button };
