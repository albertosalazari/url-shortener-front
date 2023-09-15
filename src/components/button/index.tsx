import { ButtonHTMLAttributes } from 'react';
import { Loader } from '@components';
import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  title?: string;
}

export function Button({ isLoading = false, title = '', type, ...props }: ButtonProps) {
  return (
    <StyledButton type={type} disabled={isLoading} {...props}>
      {isLoading ? <Loader /> : title}
    </StyledButton>
  );
}
