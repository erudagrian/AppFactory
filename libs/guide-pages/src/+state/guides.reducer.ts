import { Guides, Templates } from './guides.interfaces';
import { GuidesAction } from './guides.actions';
import { guidesAdapter, templatesAdapter } from "./guides.init";
import { GuidesActionTypes } from "./guides.actions";

export function guidesReducer(state: Guides, action: GuidesAction): Guides {
  switch (action.type) {

    case GuidesActionTypes.GUIDE_DOCUMENT: {
      return guidesAdapter.addOne(action.payload, state);
    }

    case GuidesActionTypes.GUIDES_DOCUMENT: {
      const { entities, selectedGuideId } = state;
      const oldGuide = entities[selectedGuideId];

      const indexOfSelectedGuide = action.payload.findIndex(guide => guide.id === selectedGuideId);
      if (indexOfSelectedGuide > -1) {
        action.payload.splice(indexOfSelectedGuide, 1,oldGuide);
      }
      return guidesAdapter.addAll(action.payload, state);
    }

    case GuidesActionTypes.SET_SELECTED_GUIDE_ID: {
      return { ...state, selectedGuideId: action.payload };
    }
    
    default: {
      return state;
    }

  }
}

export function templatesReducer(state: Templates, action: GuidesAction): Templates {
  switch (action.type) {
    
    case GuidesActionTypes.FIELD_DOCUMENT: {
      const { entities, selectedTemplateId } = state;
      const oldTemplate = entities[selectedTemplateId];
      const newTemplate= { ...oldTemplate, fields: [ ...oldTemplate.fields, action.payload] };

      return templatesAdapter.updateOne({ id: selectedTemplateId, changes: newTemplate }, state);
    }

    case GuidesActionTypes.TEMPLATE_DOCUMENT: {
      return templatesAdapter.addOne(action.payload, state);
    }

    case GuidesActionTypes.TEMPLATES_DOCUMENT: {
      const { entities, selectedTemplateId } = state;
      const oldTemplate = entities[selectedTemplateId];

      const indexOfSelectedTemplate = action.payload.findIndex(template => template.id === selectedTemplateId);
      if (indexOfSelectedTemplate > -1) {
        action.payload.splice(indexOfSelectedTemplate, 1, oldTemplate);
      }
      return templatesAdapter.addAll(action.payload, state);
    }

    case GuidesActionTypes.SET_SELECTED_TEMPLATE_ID: {
      return { ...state, selectedTemplateId: action.payload };
    }
    
    default: {
      return state;
    }

  }
}