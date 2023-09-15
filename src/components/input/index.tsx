import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  register?: any;
}

export function Input({ errorMessage, register, ...props }: InputProps) {
  return (
    <Container {...props}>
      {!register && <input {...props} type={props.type} />}
      {register && <input {...props} type={props.type} {...register(props.name)} />}
      {errorMessage && <span className="error">{errorMessage}</span>}
    </Container>
  );
}
