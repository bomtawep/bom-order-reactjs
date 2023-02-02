import { combineReducers } from 'redux';
import { productTypeReducer } from './ProductTypes';

const reducers = combineReducers({
    ProductTypes: productTypeReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
