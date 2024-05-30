import { cx } from 'classix';
import { ChangeEvent, memo } from 'react';

import { Select } from '@/shared/ui/Select';

import { RECIPE_ORDER_OPTIONS, RecipesOrderField } from '../model/consts/recipesOrderConsts';

interface IRecipesOrderProps {
  className?: string;
  order: RecipesOrderField;
  onOrderChange: (order: RecipesOrderField) => void;
}

export const RecipesOrder = memo((props: IRecipesOrderProps) => {
  const { className, order, onOrderChange } = props;

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
      options={RECIPE_ORDER_OPTIONS}
    />
  );
});
