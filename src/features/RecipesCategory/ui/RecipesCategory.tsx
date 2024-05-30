import { cx } from 'classix';
import { ChangeEvent, memo } from 'react';

import { Select } from '@/shared/ui/Select';

import { RecipesCategoryField, RECIPES_CATEGORY_OPTIONS } from '../model/consts/recipesCategoryConsts';

interface IRecipesCategoryProps {
  className?: string;
  category?: RecipesCategoryField;
  onCategoryChange: (category: RecipesCategoryField) => void;
}

export const RecipesCategory = memo((props: IRecipesCategoryProps) => {
  const { className, onCategoryChange, category } = props;

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
      options={RECIPES_CATEGORY_OPTIONS}
    />
  );
});
