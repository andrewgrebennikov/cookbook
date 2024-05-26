import { memo, SelectHTMLAttributes } from 'react';

interface Option {
  id: number;
  value: string;
  name: string;
}

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  label?: string;
  options: Option[];
  defaultLabel?: string;
}

export const Select = memo((props: ISelectProps) => {
  const { className, label, options, defaultLabel, id, ...otherProps } = props;

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <select className="form-control" id={id} {...otherProps}>
        {defaultLabel && <option value="">{defaultLabel}</option>}
        {options.map((option) => {
          const { id, value, name } = option;

          return (
            <option key={id} value={value}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
});
