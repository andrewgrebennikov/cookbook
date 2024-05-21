import { useParams } from 'react-router-dom';

import { RecipeDetails } from '@/entities/Recipe';

const RecipePage = () => {
  const { id: recipeId } = useParams();

  return <RecipeDetails recipeId={recipeId} />;
};

export default RecipePage;
