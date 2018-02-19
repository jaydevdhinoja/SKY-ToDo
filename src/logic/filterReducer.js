import {VisibilityFilters, SET_VISIBILITY_FILTER} from './consts';
const {SHOW_ALL} = VisibilityFilters;

export const setVisibilityFilter = filter => {
    return { type: SET_VISIBILITY_FILTER, filter };
}
  
const visibilityFilterReducer = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default visibilityFilterReducer;