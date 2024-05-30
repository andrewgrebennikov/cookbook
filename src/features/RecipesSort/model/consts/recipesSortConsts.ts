export enum RecipesSortField {
  TITLE = 'title',
  LIKES = 'likes',
  DIFFICULTY = 'difficulty',
}

export const RECIPE_ORDER_OPTIONS = [
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
];
