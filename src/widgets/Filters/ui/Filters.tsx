import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { fetchRecipesData, recipesActions } from '@/features/RecipesList';
import { getRecipesOrder, RecipesOrder, RecipesOrderField } from '@/features/RecipesOrder';
import { getRecipesSearch, RecipesSearch } from '@/features/RecipesSearch';
import { getRecipesSort, RecipesSort, RecipesSortField } from '@/features/RecipesSort';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';

interface IFiltersProps {
  className?: string;
}

export const Filters = (props: IFiltersProps) => {
  const { className } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const search = useSelector(getRecipesSearch);
  const order = useSelector(getRecipesOrder);
  const sort = useSelector(getRecipesSort);

  const fetchRecipes = useCallback(() => {
    dispatch(fetchRecipesData());
  }, [dispatch]);

  const debouncedFetchRecipes = useDebounce(fetchRecipes, 500);

  const handleSearchChange = useCallback(
    (newSearch: string) => {
      dispatch(recipesActions.setSearch(newSearch));
      debouncedFetchRecipes();

      newSearch ? searchParams.set('search', newSearch) : searchParams.delete('search');
      setSearchParams(searchParams);
    },
    [debouncedFetchRecipes, dispatch, searchParams, setSearchParams],
  );

  const handleSortChange = useCallback(
    (newSort: RecipesSortField) => {
      const isSortLikes = newSort === RecipesSortField.LIKES;

      dispatch(recipesActions.setSort(newSort));
      fetchRecipes();

      !isSortLikes ? searchParams.set('sort', newSort) : searchParams.delete('sort');
      setSearchParams(searchParams);
    },
    [dispatch, fetchRecipes, searchParams, setSearchParams],
  );

  const handleOrderChange = useCallback(
    (newOrder: RecipesOrderField) => {
      const isOrderAsc = newOrder === RecipesOrderField.ASC;

      dispatch(recipesActions.setOrder(newOrder));
      debouncedFetchRecipes();

      !isOrderAsc ? searchParams.set('order', newOrder) : searchParams.delete('order');
      setSearchParams(searchParams);
    },
    [debouncedFetchRecipes, dispatch, searchParams, setSearchParams],
  );

  return (
    <>
      <RecipesSearch onSearchChange={handleSearchChange} search={search} />
      <RecipesSort onSortChange={handleSortChange} sort={sort} />
      <RecipesOrder onOrderChange={handleOrderChange} order={order} />
    </>
  );
};
