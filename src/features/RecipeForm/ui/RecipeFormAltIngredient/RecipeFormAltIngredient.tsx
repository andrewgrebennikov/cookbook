import { ChangeEvent, memo, MouseEvent } from 'react';

import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';

interface IRecipeFormAltIngredientProps {
  className?: string;
  name?: string;
  quantity?: string;
  onAltIngredientChangeName?: (event: ChangeEvent<HTMLInputElement>) => void;
  onAltIngredientChangeQuantity?: (event: ChangeEvent<HTMLInputElement>) => void;
  onAltIngredientRemove?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const RecipeFormAltIngredient = memo((props: IRecipeFormAltIngredientProps) => {
  const { className, name, quantity, onAltIngredientRemove, onAltIngredientChangeName, onAltIngredientChangeQuantity } =
    props;

  return (
    <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 mb-3">
      <span>Запасной</span>
      <Input
        className="flex-md-grow-1"
        type="text"
        placeholder="Имя"
        value={name}
        onChange={onAltIngredientChangeName}
      />
      <Input
        className="flex-md-grow-1"
        type="text"
        placeholder="Количество"
        value={quantity}
        onChange={onAltIngredientChangeQuantity}
      />
      <Button type="button" variant={ButtonVariant.DANGER} onClick={onAltIngredientRemove}>
        Удалить альтернативу
      </Button>
    </div>
  );
});
