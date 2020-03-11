import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleWare } from 'redux';

import rootReducer from '../src/reducers';
import { middlewares } from '../src/configureStore';

// Create a testing store with imported reducers, middleware and initial state.
// globals: rootReducer, middlewares.
// @param {object} initialState - Initial state for store
// @function storeFactory
// @returns {store} - Redux store

export const storeFactory = (initialState) => {
    const createStoreWithMiddleWare = applyMiddleWare(...middlewares)(createStore)
    createStoreWithMiddleWare(rootReducer, initialState);
}

// Return node(s) with the given data-test attribute.
// @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
// @param {string} val - value of data-test attribute for search.
// @returns {ShallowWrapper}


export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name);
    expect(propError).toBeUndefined();
}
