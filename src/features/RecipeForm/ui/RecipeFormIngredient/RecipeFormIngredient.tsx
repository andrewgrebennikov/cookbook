import { ChangeEvent, memo } from 'react';

import { Input } from '@/shared/ui/Input/Input';

interface IRecipeFormIngredientProps {
  className?: string;
  name?: string;
  quantity?: string;
  onAltIngredientChangeName?: (event: ChangeEvent<HTMLInputElement>) => void;
  onAltIngredientChangeQuantity?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RecipeFormIngredient = memo((props: IRecipeFormIngredientProps) => {
  const { className, name, quantity, onAltIngredientChangeName, onAltIngredientChangeQuantity } = props;

  return (
    <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 mb-3">
      <span>Основной</span>
      <Input
        className="flex-md-grow-1"
        type="text"
        placeholder="Имя"
        value={name}
        onChange={onAltIngredientChangeName}
        required
      />
      <Input
        className="flex-md-grow-1"
        type="text"
        placeholder="Количество"
        value={quantity}
        onChange={onAltIngredientChangeQuantity}
      />
    </div>
  );
});
