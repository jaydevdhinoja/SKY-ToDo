import React from 'react';
import { shallow, mount } from 'enzyme';
import ToDoItem  from '../ToDoItem';

const defaultProps = {
    item: {},
    onMarkComplete:f => f, 
    onDeleteItem: f => f,
}

describe("ToDo Item", () => {

    it('renders without crashing', () =>{
        shallow(<ToDoItem {...defaultProps}/>);
    });

    it('should call onMarkComplete when clicked on todo item', () => {
        const onMarkComplete = jest.fn();
        const renderedItem = mount(
          <ToDoItem item={{ id: 1, content: 'Test 1', completed: false }} onMarkComplete={onMarkComplete} onDeleteItem={f => f} />
        );
        renderedItem.find('.todo-item').simulate('click');
        expect(onMarkComplete).toBeCalled();
    });

    it('should call onDeleteItem when clicked on todo item', () => {
        const onDeleteItem = jest.fn();
        const renderedItem = mount(
          <ToDoItem item={{ id: 1, content: 'Test 1', completed: false }} onDeleteItem={onDeleteItem} onMarkComplete={f => f} />
        );
        renderedItem.find('.todo-item-delete').simulate('click');
        expect(onDeleteItem).toBeCalled();
    });

});