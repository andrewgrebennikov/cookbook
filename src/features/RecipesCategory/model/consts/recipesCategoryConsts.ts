export enum RecipesCategoryField {
  ALL = 'Все категории',
  SOUP = 'Супы',
  SALAD = 'Салаты',
  PASTA = 'Паста и пиццы',
  DRINK = 'Напитки',
}

export const RECIPES_CATEGORY_OPTIONS = [
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
];
