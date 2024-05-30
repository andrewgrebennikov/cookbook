import { ChangeEvent, memo, MouseEvent } from 'react';

import { Button, ButtonVariant } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

interface IRecipeFormStepProps {
  className?: string;
  value?: string;
  onStepChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onStepRemove?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const RecipeFormStep = memo((props: IRecipeFormStepProps) => {
  const { className, value, onStepRemove, onStepChange } = props;

  return (
    <div className="d-flex gap-3 mb-3">
      <Input className="flex-grow-1" type="text" value={value} onChange={onStepChange} required />
      <Button type="button" variant={ButtonVariant.DANGER} className="flex-shrink-0" onClick={onStepRemove}>
        Удалить этап
      </Button>
    </div>
  );
});
