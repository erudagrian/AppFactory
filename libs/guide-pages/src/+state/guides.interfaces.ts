import { EntityState } from '@ngrx/entity';

export interface Field{
  id: number;
  title: string;
  type: string;
}

export interface Template {
  id: string;
  title: string;
  order: number;
  fields?: Field[];
  info?: string;
  weight?: number;
}

export interface Guide {
  id: string;
  title: string;
}

export interface UI {
  guideFormLoading: boolean;
}

export interface Guides extends EntityState<Guide>{
  selectedGuideId: string;
  ui?: UI;
}

export interface Templates extends EntityState<Template>{
  selectedTemplateId: string;
  ui?: UI;
}

export interface GuidesState {
  readonly guides: Guides;
}
