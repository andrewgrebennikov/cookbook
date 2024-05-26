import { cx } from 'classix';
import { ChangeEvent, memo, useMemo } from 'react';

import { Select } from '@/shared/ui/Select/Select';

import { RecipesSortField } from '../model/consts/recipesSortConsts';

interface IRecipesSortProps {
  className?: string;
  sort: RecipesSortField;
  onSortChange: (sort: RecipesSortField) => void;
}

export const RecipesSort = memo((props: IRecipesSortProps) => {
  const { className, onSortChange, sort } = props;

  const options = useMemo(
    () => [
      {
        id: 1,
        value: RecipesSortField.LIKES,
        name: 'По популярности',
      },
      {
        id: 2,
        value: RecipesSortField.TITLE,
        name: 'По названию',
      },
      {
        id: 3,
        value: RecipesSortField.DIFFICULTY,
        name: 'По сложности приготовления',
      },
    ],
    [],
  );

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
      options={options}
    />
  );
});
