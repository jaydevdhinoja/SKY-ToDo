import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

/****
 *  ToDo item Component
 * 
 *  It displays ToDo item  with ability to mark as complete and delete item 
 * 
 *  @param {object} item - item to render as ToDo item
 *  @callback onMarkComplete
 *  @callback onDeleteItem
 */

const ToDoItem = ({item, onMarkComplete, onDeleteItem}) => {
    
    return (
        <li key={item.id}>
            <div>
                <span className='todo-item' onClick={onMarkComplete.bind(this,item.id)} 
                    style={
                        {textDecoration: item.completed ? 'line-through': 'none',
                        cursor: item.completed ? 'default' : 'pointer'}
                    }>{item.content}
                </span>
                <span className='todo-item-delete' onClick={onDeleteItem.bind(this,item.id)}>delete</span>
            </div>
        </li>
    )
}

ToDoItem.propTypes = {
    item: PropTypes.object.isRequired,
    onMarkComplete: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
};

export default ToDoItem;