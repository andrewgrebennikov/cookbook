import { ChangeEvent, memo, MouseEvent } from 'react';

import { Button, ButtonVariant } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

interface IRecipeFormBaseIngredientProps {
  className?: string;
  value?: string;
  onBaseIngredientChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBaseIngredientRemove?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const RecipeFormBaseIngredient = memo((props: IRecipeFormBaseIngredientProps) => {
  const { className, value, onBaseIngredientRemove, onBaseIngredientChange } = props;

  return (
    <div className="mb-3">
      <div className="d-flex gap-3 mb-3">
        <Input className="flex-grow-1" type="text" placeholder="Имя" value={value} onChange={onBaseIngredientChange} />
        <Button type="button" variant={ButtonVariant.DANGER} className="flex-shrink-0" onClick={onBaseIngredientRemove}>
          Удалить ингредиент
        </Button>
      </div>
    </div>
  );
});
