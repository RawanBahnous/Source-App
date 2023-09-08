import { createAction , props } from "@ngrx/store";
import { Worksource } from "src/app/Models/worksource.model";


export const addWorkSource = createAction(
  '[Worksource] AddWorkSource',
  props<{ worksource : Worksource}>()
);
export const editWorkSource = createAction(
  '[Worksource] EditWorkSource',
  props<{ worksource : Worksource}>()
);
export const deleteWorkSource = createAction(
  '[Worksource] DeleteWorkSource',
  props<{ worksource: Worksource }>()
);
