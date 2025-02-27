import React from 'react';
import { useSearchUIContext, useSearchUIContextActions } from '../SearchUIContextProvider';
import { Paginator } from '../../Paginator';
import { SynthesisRecipeCard } from '../../SynthesisRecipeCard';

/**
 *
 */
export const SearchUISynthesisRecipeCards: React.FC = () => {
  const state = useSearchUIContext();
  const actions = useSearchUIContextActions();
  const handlePageChange = (page: number) => {
    actions.setPage(page);
  };

  const CustomPaginator = ({ isTop = false }) => (
    <Paginator
      rowCount={state.totalResults}
      rowsPerPage={state.resultsPerPage}
      currentPage={state.page}
      onChangePage={handlePageChange}
      isTop={isTop}
    />
  );

  return (
    <div data-testid="mpc-synthesis-recipe-cards" className="mpc-synthesis-recipe-cards">
      <CustomPaginator isTop />
      <div className="mpc-synthesis-recipe-cards-container">
        {state.results.map((d, i) => (
          // Custom result cards
          <SynthesisRecipeCard data={d} key={d.doi + '-' + i} />
        ))}
      </div>
      <CustomPaginator />
    </div>
  );
};
