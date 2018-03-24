import { guidesReducer } from './guides.reducer';
import { guidesInitialState } from './guides.init';
import { Guides } from './guides.interfaces';
import { DataLoaded } from './guides.actions';

describe('guidesReducer', () => {
  it('should work', () => {
    const state: Guides = {};
    const action: DataLoaded = {type: 'DATA_LOADED', payload: {}};
    const actual = guidesReducer(state, action);
    expect(actual).toEqual({});
  });
});
