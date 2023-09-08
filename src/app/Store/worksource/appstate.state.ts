import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Worksource } from '../../Models/worksource.model';

export interface WorksourceState {
  worksources: Worksource[];
}

export const initialWorksourceState: WorksourceState = {
  worksources: [],
};
