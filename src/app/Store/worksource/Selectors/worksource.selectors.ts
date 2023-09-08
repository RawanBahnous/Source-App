// worksource.selectors.ts

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WorksourceState } from '../appstate.state';

// Select the feature state
export const selectWorksourceState = createFeatureSelector<WorksourceState>('worksource');

// Create a selector for getting all worksources
export const selectAllWorksources = createSelector(
  selectWorksourceState,
  (state) => state.worksources
);
