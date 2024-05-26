import { cx } from 'classix';
import { ChangeEvent, memo, useMemo } from 'react';

import { Select } from '@/shared/ui/Select/Select';

import { RecipesCategoryField } from '../model/consts/recipesCategoryConsts';

interface IRecipesCategoryProps {
  className?: string;
  category?: RecipesCategoryField;
  onCategoryChange: (category: RecipesCategoryField) => void;
}

export const RecipesCategory = memo((props: IRecipesCategoryProps) => {
  const { className, onCategoryChange, category } = props;

  const options = useMemo(
    () => [
      {
        id: 1,
        value: RecipesCategoryField.ALL,
        name: 'Все категории',
      },
      {
        id: 2,
        value: RecipesCategoryField.DRINK,
        name: 'Напитки',
      },
      {
        id: 3,
        value: RecipesCategoryField.PASTA,
        name: 'Паста и пицца',
      },
      {
        id: 4,
        value: RecipesCategoryField.SOUP,
        name: 'Супы',
      },
      {
        id: 5,
        value: RecipesCategoryField.SALAD,
        name: 'Салаты',
      },
    ],
    [],
  );

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(event.target.value as RecipesCategoryField);
  };

  return (
    <Select
      className={cx('mb-3', className)}
      label="Категория"
      id="category"
      value={category}
      onChange={handleCategoryChange}
      options={options}
    />
  );
});
