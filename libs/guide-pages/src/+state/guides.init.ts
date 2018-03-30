import { Guide, Guides, Template, Templates } from './guides.interfaces';
 
import { createEntityAdapter } from "@ngrx/entity";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const guidesAdapter = createEntityAdapter<Guide>();
export const templatesAdapter = createEntityAdapter<Template>();

export const guidesInitialState: Guides = {
  ids: [],
  entities: {},
  selectedGuideId: ''
};

export const templatesInitialState: Templates = {
  ids: [],
  entities: {},
  selectedTemplateId: ''
};


// State selectors
const getFields = (state: any) => state ? state.fields : [];
const getTemplates = (state: any) => state ? state.templates : [];
const getSelectedGuideId = (state: any) => state.selectedGuideId;
const getSelectedTemplateId = (state: any) => state.selectedTemplateId;

// Memoized selectors
export const selectFeatureState = createFeatureSelector<Guides>('guides');
export const selectFeatureTemplateState = createFeatureSelector<Templates>('template');

export const {
  selectAll: allGuides,
  selectEntities: guideEntities
} = guidesAdapter.getSelectors(selectFeatureState);

export const {
  selectAll: allTemplates,
  selectEntities: templateEntities
} = templatesAdapter.getSelectors(selectFeatureTemplateState);

export const selectSelectedGuideId = createSelector(
  selectFeatureState,
  getSelectedGuideId
);

export const selectSelectedTemplateId = createSelector(
  selectFeatureState,
  getSelectedTemplateId
);

export const selectedGuide = createSelector(
  guideEntities,
  selectSelectedGuideId,
  (guides, selectedGuideId) => guides[selectedGuideId]
);

export const selectedTemplate = createSelector(
  templateEntities,
  selectSelectedTemplateId,
  (guideTemplates, selectedTemplateId) => guideTemplates[selectedTemplateId]
);

export const fields = createSelector(
  selectedTemplate,
  getFields
);

export const templates = createSelector(
  selectedGuide,
  getTemplates
);
