import React from 'react';
import { SearchUI } from '../../components/data-display/SearchUI';
import { FilterGroup } from '../../components/data-display/SearchUI/types';
import filterGroups from './filterGroups.json';
import columns from './columns.json';
import { SearchUIViewType } from '../../components/data-display/SearchUI/types';
import { PeriodicTableMode } from '../../components/data-entry/MaterialsInput/MaterialsInput';

/**
 * Component for testing the Materials Explorer view
 */

export const MaterialsExplorer: React.FC = () => {
  return (
    <>
      <h1 className="title">Materials Explorer</h1>
      <SearchUI
        view={SearchUIViewType.TABLE}
        // allowViewSwitching
        // cardOptions={{
        //   imageBaseURL: 'https://next-gen.materialsproject.org/static/structures/',
        //   imageKey: 'material_id',
        //   levelOneKey: 'material_id',
        //   levelTwoKey: 'formula_pretty',
        //   levelThreeKeys: [
        //     { key: 'energy_above_hull', label: 'Energy Above Hull' },
        //     { key: 'formation_energy_per_atom', label: 'Formation Energy' }
        //   ]
        // }}
        resultLabel="material"
        columns={columns}
        filterGroups={filterGroups as FilterGroup[]}
        baseUrl={process.env.REACT_APP_BASE_URL ? process.env.REACT_APP_BASE_URL + '/summary/' : ''}
        autocompleteFormulaUrl={
          process.env.REACT_APP_AUTOCOMPLETE_URL
            ? process.env.REACT_APP_AUTOCOMPLETE_URL
            : undefined
        }
        apiKey={undefined}
        hasSortMenu={true}
        sortField="formula_pretty"
        sortAscending={true}
        searchBarTooltip="Type in a comma-separated list of element symbols (e.g. Ga, N), a chemical formula (e.g. C3N), or a material id (e.g. mp-10152). You can also click elements on the periodic table to add them to your search."
        searchBarPlaceholder="Search by elements, formula, or ID"
        searchBarErrorMessage="Please enter a valid formula (e.g. CeZn5), list of elements (e.g. Ce, Zn or Ce-Zn), or ID (e.g. mp-394 or mol-54330)."
        searchBarPeriodicTableMode={PeriodicTableMode.TOGGLE}
        searchBarAllowedInputTypesMap={{
          elements: {
            field: 'elements'
          },
          formula: {
            field: 'formula'
          },
          mpid: {
            field: 'material_ids'
          }
        }}
      />
    </>
  );
};
