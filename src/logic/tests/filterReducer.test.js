import visibilityFilterReducer, { setVisibilityFilter } from '../filterReducer';
import { VisibilityFilters } from '../consts';

describe('visibility reducer', () => {

    it('should return state for unknown action', () => {
        const mockState = { test: 'testFilterItem' };
        const mockAction = { type: 'dummy-action' };
        const result = visibilityFilterReducer(mockState, mockAction);
        expect(result).toEqual(mockState);
    });

    it('should use initial state if state not provided', () => {
        const mockAction = { type: 'dummy-action' };
        const result = visibilityFilterReducer(undefined, mockAction);
        expect(result).toEqual(VisibilityFilters.SHOW_ALL);
    });

    it('should set filter on SET_VISIBILITY_FILTER', () => {
        const state = VisibilityFilters.SHOW_ALL;
        const mockAction = setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED);
        const result = visibilityFilterReducer(state, mockAction);
        expect(result).toEqual(VisibilityFilters.SHOW_COMPLETED);
    });

});