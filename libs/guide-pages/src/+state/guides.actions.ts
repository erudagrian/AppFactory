import { Guide, Field, Template } from './guides.interfaces';

export enum GuidesActionTypes {
  FIELD_EVENT = '[Guides] Field data event',
  FIELD_DOCUMENT = '[Guides] Field document',
  FIELDS_DOCUMENT = '[Guides] Fields document',

  GUIDE_DOCUMENT = '[Guides] Guide document',
  GUIDE_EVENT = '[Guides] Guide event',
  GUIDES_DOCUMENT = '[Guides] Guides document',
  SET_SELECTED_GUIDE_ID = '[Guides] Set selected guide id',

  TEMPLATE_DOCUMENT = '[Guides] Template document',
  TEMPLATE_EVENT = '[Guides] Template event',
  TEMPLATES_DOCUMENT = '[Guides] Templates document',
  SET_SELECTED_TEMPLATE_ID = '[Guides] Set selected template id',
}

// Field

export interface FieldEvent {
  type: GuidesActionTypes.FIELD_EVENT;
  payload: Field;
}

export interface FieldDocument {
  type: GuidesActionTypes.FIELD_DOCUMENT;
  payload: Field;
}

export interface FieldsDocument {
  type: GuidesActionTypes.FIELDS_DOCUMENT;
  payload: Field[];
}

// Template
export interface TemplateDocument {
  type: GuidesActionTypes.TEMPLATE_DOCUMENT;
  payload: Template;
}

export interface TemplatesDocument {
  type: GuidesActionTypes.TEMPLATES_DOCUMENT;
  payload: Template[];
}

export interface TemplateEvent {
  type: GuidesActionTypes.TEMPLATE_EVENT;
  payload: Template;
}

export interface SetSelectedTemplateId {
  type: GuidesActionTypes.SET_SELECTED_TEMPLATE_ID;
  payload: string;
}

// Guide

export interface GuideDocument {
  type: GuidesActionTypes.GUIDE_DOCUMENT;
  payload: Guide;
}

export interface GuideEvent {
  type: GuidesActionTypes.GUIDE_EVENT;
  payload: Guide;
}

export interface GuidesDocument {
  type: GuidesActionTypes.GUIDES_DOCUMENT;
  payload: Guide[];
}

export interface SetSelectedGuideId {
  type: GuidesActionTypes.SET_SELECTED_GUIDE_ID;
  payload: string;
}

export type GuidesAction = 
  FieldEvent | 
  FieldDocument |
  FieldsDocument |  
  TemplateDocument |
  TemplatesDocument |
  TemplateEvent |
  SetSelectedTemplateId |
  GuideDocument |
  GuideEvent |
  GuidesDocument |
  SetSelectedGuideId;

