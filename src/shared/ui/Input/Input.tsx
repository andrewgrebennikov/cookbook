import { InputHTMLAttributes, memo } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
}

export const Input = memo((props: IInputProps) => {
  const { className, label, id, ...otherProps } = props;

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <input className="form-control" id={id} {...otherProps} />
    </div>
  );
});
