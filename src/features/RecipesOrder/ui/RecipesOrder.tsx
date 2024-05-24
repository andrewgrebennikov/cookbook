import { ChangeEvent, useMemo } from 'react';

import { RecipesOrderField } from '../model/consts/recipesOrderConsts';

interface IRecipesOrderProps {
  className?: string;
  order: RecipesOrderField;
  onOrderChange: (order: RecipesOrderField) => void;
}

export const RecipesOrder = (props: IRecipesOrderProps) => {
  const { className, order, onOrderChange } = props;

  const options = useMemo(
    () => [
      {
        value: RecipesOrderField.ASC,
        name: 'По возрастанию',
      },
      {
        value: RecipesOrderField.DESC,
        name: 'По убыванию',
      },
    ],
    [],
  );

  const handleOrderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onOrderChange(event.target.value as RecipesOrderField);
  };

  return (
    <div className="mb-3">
      <label htmlFor="sort" className="form-label">
        Сортировать по:
      </label>
      <select className="form-select" id="sort" value={order} onChange={handleOrderChange}>
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
};
