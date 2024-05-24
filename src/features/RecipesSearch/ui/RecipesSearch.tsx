import { ChangeEvent } from 'react';

interface IRecipesSearchProps {
  className?: string;
  search: string;
  onSearchChange: (search: string) => void;
}

export const RecipesSearch = (props: IRecipesSearchProps) => {
  const { className, search, onSearchChange } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange?.(event.target.value);
  };

  return (
    <div className="mb-3">
      <label htmlFor="search" className="form-label">
        Поиск
      </label>
      <input type="search" className="form-control" id="search" value={search} onChange={handleChange} />
    </div>
  );
};
