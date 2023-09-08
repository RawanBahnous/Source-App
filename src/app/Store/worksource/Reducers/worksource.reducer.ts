import { createReducer, on } from '@ngrx/store';
import * as WorksourceActions from '../Actions/worksource.actions';
import { Worksource } from "src/app/Models/worksource.model";
import { initialWorksourceState ,WorksourceState } from "../appstate.state";

const workSourceReducer = createReducer(
  initialWorksourceState,
  on(WorksourceActions.addWorkSource, (state, { worksource }) => ({
    ...state,
    worksources: [...state.worksources, worksource],
  })),
  on(WorksourceActions.editWorkSource, (state, { worksource }) => ({
    ...state,
    worksources: state.worksources.map((w) => (w.srcName === worksource.srcName ? worksource : w)),
  })),
  on(WorksourceActions.deleteWorkSource, (state, { worksource }) => ({
    ...state,
    worksources: state.worksources.filter((w) => w.srcName !== worksource.srcName),
  }))
);


export function reducer(state:WorksourceState|undefined,action:any){
  return workSourceReducer(state,action);
}
