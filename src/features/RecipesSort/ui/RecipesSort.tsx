import { cx } from 'classix';
import { ChangeEvent, memo } from 'react';

import { Select } from '@/shared/ui/Select';

import { RECIPE_ORDER_OPTIONS, RecipesSortField } from '../model/consts/recipesSortConsts';

interface IRecipesSortProps {
  className?: string;
  sort: RecipesSortField;
  onSortChange: (sort: RecipesSortField) => void;
}

export const RecipesSort = memo((props: IRecipesSortProps) => {
  const { className, onSortChange, sort } = props;

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value as RecipesSortField);
  };

  return (
    <Select
      className={cx('mb-3', className)}
      label="Сортировать по:"
      id="sort"
      value={sort}
      onChange={handleSortChange}
      options={RECIPE_ORDER_OPTIONS}
    />
  );
});
