import React from 'react';
import { shallow, mount } from 'enzyme';
import Filter from '../index';
import { VisibilityFilters } from '../../../logic/consts';
import renderer from 'react-test-renderer';

//These are used to pass a mock store down through nested components
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const defaultProps = {
    filter: VisibilityFilters.SHOW_ALL,
    onFilterChange: f=> f,
}

describe("Filter ToDo", () => {

    const initialState = {filter:VisibilityFilters.SHOW_ALL};
    const mockStore = configureStore();
    let store,wrapper;
    const onFilterChange = jest.fn();

    beforeEach(()=>{
         store = mockStore(initialState)
         wrapper = mount( <Provider store={store}><Filter onFilterChange={onFilterChange}/></Provider> );
    });

    it('should match when its empty', () =>{
        expect(wrapper.length).toEqual(1);
    });

    it('should have 3 filter values', () => {
        expect(wrapper.find('a')).toHaveLength(3);
    });
    
})