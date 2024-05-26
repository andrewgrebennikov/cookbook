import { cx } from 'classix';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

export enum ButtonVariant {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
  DANGER = 'danger',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  children: ReactNode;
}

export const Button = memo((props: IButtonProps) => {
  const { children, className, variant = ButtonVariant.CONTAINED, ...otherProps } = props;

  return (
    <button
      className={cx(
        'btn',
        className,
        {
          [ButtonVariant.CONTAINED]: 'btn-primary',
          [ButtonVariant.OUTLINED]: 'btn-outline-primary',
          [ButtonVariant.DANGER]: 'btn-danger',
        }[variant],
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
});
