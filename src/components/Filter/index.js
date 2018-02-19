import React, { Component, PropTypes } from 'react';
import { setVisibilityFilter } from '../../logic/filterReducer';
import { connect } from 'react-redux';

//filters
import {VisibilityFilters} from '../../logic/consts';
const {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} = VisibilityFilters;

/****
 *  Filter component to allow filtering Active, Completed or All items
 * 
 *  It renders Show All, Completed and Active links
 *  @param {string} filter - filter value 
 * 
 */

class Filter extends Component {


    handleClick (filter, event) {
        event.preventDefault();
        this.props.onFilterChange(filter);
    }

    renderFilter (filter, name) {
        if (filter === this.props.filter) {
        return name;
        }

        return (
        <a href='#' title={name} onClick={this.handleClick.bind(this,filter)}>
            {name}
        </a>
        );
    }

    render() {
        return (
            <p>
            Show:
            {' '}
            {this.renderFilter(SHOW_ALL, 'All')}
            {', '}
            {this.renderFilter(SHOW_COMPLETED, 'Completed')}
            {', '}
            {this.renderFilter(SHOW_ACTIVE, 'Active')}
            .
            </p>
        );
    }
};

const mapStateToProps = state => {
    return {
        filter: state.visibilityFilter
    };
};
  
const mapDispatchToProps = dispatch => ({
    onFilterChange: filter => dispatch(setVisibilityFilter(filter)),
});

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(Filter);