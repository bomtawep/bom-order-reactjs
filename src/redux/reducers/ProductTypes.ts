import { ProductTypes, Action, ActionType } from '../actions/ProductTypes';

interface State {
    ProductTypes: ProductTypes[];
    form: {};
    loading: boolean;
    error: string | null;
    nav: boolean;
}

const initialState = {
    ProductTypes: [],
    form: {},
    loading: false, 
    error: null,
    nav: false
}

export const productTypeReducer = (state: State = initialState, action: Action):State => {
    switch(action.type) {
        case ActionType.PRODUCT_TYPE_PENDING:
            return {
                ProductTypes: [],
                form: {},
                loading: true,
                error: null,
                nav: false
            } 
        case ActionType.PRODUCT_TYPE_SUCCESS:
            return {
                ProductTypes: action.payload,
                form: {},
                loading: false,
                error: null,
                nav: true
            }
        case ActionType.PRODUCT_TYPE_1_SUCCESS:
            return {
                ProductTypes: [],
                form: action.payload,
                loading: false,
                error: null,
                nav: false
            }
        case ActionType.PRODUCT_TYPE_FAIL:
            return {
                ProductTypes: [],
                form: {},
                loading: false,
                error: action.payload,
                nav: false
            }
        default: 
            return state;
    }
}