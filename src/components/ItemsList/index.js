import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//component
import ToDoItem from './ToDoItem'

//constants
import { VisibilityFilters } from '../../logic/consts';

//styles
import './styles.css';

//actions
import { markAsComplete, deleteItem } from '../../logic/todos';

export const ItemsList = ({ items, onMarkComplete, onDeleteItem }) => {
  return (
    <div>
      <ul className="itemsList-ul">
        {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
        {items.map(item => 
              <ToDoItem key={item.id} item={item} onMarkComplete={onMarkComplete} onDeleteItem={onDeleteItem}/>
          )}
      </ul>
    </div>
  );
};

//filter todo items based on filter
function selectItemList (items, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return items;
    case VisibilityFilters.SHOW_COMPLETED:
      return items.filter(item => item.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return items.filter(item => !item.completed);
    default:
      return items;
  }
}

const mapStateToProps = state => {
  const test = selectItemList(state.todos.items,state.visibilityFilter);
  return { items: test};
};

const mapDispatchToProps = dispatch => ({
  onMarkComplete: id => dispatch(markAsComplete(id)),
  onDeleteItem: id => dispatch(deleteItem(id)),
});

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  onMarkComplete: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps,mapDispatchToProps)(ItemsList);
