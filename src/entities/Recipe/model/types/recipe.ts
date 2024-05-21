import { RecipeDifficulty } from '../consts/recipeConsts';

export interface Ingredient {
  name: string;
  quantity: string;
  alternatives: string[];
}

export interface Recipe {
  id: string;
  title: string;
  image: string;
  likes: number;
  description: string;
  cookingSteps: string[];
  ingredients: Ingredient[];
  difficulty: RecipeDifficulty;
}
