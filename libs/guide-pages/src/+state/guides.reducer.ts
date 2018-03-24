import {Guides} from './guides.interfaces';
import {GuidesAction} from './guides.actions';

export function guidesReducer(state: Guides, action: GuidesAction): Guides {
  switch (action.type) {
    case 'DATA_LOADED': {
      return {...state, ...action.payload};
    }
    default: {
      return state;
    }
  }
}
