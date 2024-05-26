import { memo, TextareaHTMLAttributes } from 'react';

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  label?: string;
}

export const Textarea = memo((props: ITextareaProps) => {
  const { className, id, label, ...otherProps } = props;

  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <textarea className="form-control" id={id} {...otherProps} />
    </div>
  );
});
