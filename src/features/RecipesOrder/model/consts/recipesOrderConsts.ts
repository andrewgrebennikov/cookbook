export enum RecipesOrderField {
  ASC = 'asc',
  DESC = 'desc',
}

export const RECIPE_ORDER_OPTIONS = [
  {
    id: 1,
    value: RecipesOrderField.ASC,
    name: 'По возрастанию',
  },
  {
    id: 2,
    value: RecipesOrderField.DESC,
    name: 'По убыванию',
  },
];
