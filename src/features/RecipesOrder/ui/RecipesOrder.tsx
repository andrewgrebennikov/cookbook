import { cx } from 'classix';
import { ChangeEvent, memo, useMemo } from 'react';

import { Select } from '@/shared/ui/Select/Select';

import { RecipesOrderField } from '../model/consts/recipesOrderConsts';

interface IRecipesOrderProps {
  className?: string;
  order: RecipesOrderField;
  onOrderChange: (order: RecipesOrderField) => void;
}

export const RecipesOrder = memo((props: IRecipesOrderProps) => {
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
    <Select
      className={cx('mb-3', className)}
      label="Сортировать по:"
      id="sort"
      value={order}
      onChange={handleOrderChange}
      options={options}
    />
  );
});
