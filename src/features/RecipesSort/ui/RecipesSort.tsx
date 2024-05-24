import { ChangeEvent, useMemo } from 'react';

import { RecipesSortField } from '../model/consts/recipesSortConsts';

interface IRecipesSortProps {
  className?: string;
  sort: RecipesSortField;
  onSortChange: (sort: RecipesSortField) => void;
}

export const RecipesSort = (props: IRecipesSortProps) => {
  const { className, onSortChange, sort } = props;

  const options = useMemo(
    () => [
      {
        value: RecipesSortField.LIKES,
        name: 'По популярности',
      },
      {
        value: RecipesSortField.TITLE,
        name: 'По названию',
      },
      {
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
    <div className="mb-3">
      <label htmlFor="sort" className="form-label">
        Сортировать по:
      </label>
      <select className="form-select" id="sort" value={sort} onChange={handleSortChange}>
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
