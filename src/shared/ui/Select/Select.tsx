import { memo, SelectHTMLAttributes } from 'react';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  label?: string;
  options: {
    value: string;
    name: string;
  }[];
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
          const { value, name } = option;

          return (
            <option key={value} value={value}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
});
