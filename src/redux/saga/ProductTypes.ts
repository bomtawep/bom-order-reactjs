import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType, Action } from '../actions/ProductTypes';

const API_HOST = 'http://localhost:8080'
export const getProductTypes = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.PRODUCT_TYPE_PENDING
        });
        try {
            const { data } = await axios.get(`${API_HOST}/api/product-type/product-types`);
            console.log('data',data.data)
            dispatch({
                type: ActionType.PRODUCT_TYPE_SUCCESS,
                payload: data.data
            });
        } catch(err: any) {
            dispatch({
                type: ActionType.PRODUCT_TYPE_FAIL,
                payload: err.message
            });
        }
    }
}
export const postProductType = (payload: any) => {
    const { name, is_active } = payload
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.PRODUCT_TYPE_PENDING
        });
        try {
            const response = await axios.post(`${API_HOST}/api/product-type/product-type`, {
                'name': name,
                'is_active': is_active
            });
            dispatch({
                type: ActionType.PRODUCT_TYPE_SUCCESS,
                payload: response.data
            })
        } catch(err: any) {
            dispatch({
                type: ActionType.PRODUCT_TYPE_FAIL,
                payload: err.message
            });
        }
    }
}
export const delProductType = (payload: [], navi: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.PRODUCT_TYPE_PENDING
        });
        try {
            await axios.delete(`${API_HOST}/api/product-type/product-type`, { data: { id: payload } });
            window.location.href = navi
            dispatch({
                type: ActionType.PRODUCT_TYPE_SUCCESS,
                payload: []
            });
        } catch(err: any) {
            dispatch({
                type: ActionType.PRODUCT_TYPE_FAIL,
                payload: err.message
            });
        }
    }
}
export const getProductType = (payload: any) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.PRODUCT_TYPE_PENDING
        });
        try {
            console.log('payload', payload)
            const { data } = await axios.get(`${API_HOST}/api/product-type/product-type/${payload}`);
            dispatch({
                type: ActionType.PRODUCT_TYPE_1_SUCCESS,
                payload: data.data
            });
        } catch(err: any) {
            dispatch({
                type: ActionType.PRODUCT_TYPE_FAIL,
                payload: err.message
            });
        }
    }
}
export const updateProductType = (payload: any) => {
    const { id, name, is_active } = payload
    let response: any
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.PRODUCT_TYPE_PENDING
        });
        try {
            response = await axios.put(`${API_HOST}/api/product-type/product-type/${id}`, {
                'name': name,
                'is_active': is_active
            });
            dispatch({
                type: ActionType.PRODUCT_TYPE_SUCCESS,
                payload: response.data
            });
            console.log('Scccc')
            //window.location.href = navi
        } catch(err: any) {
            dispatch({
                type: ActionType.PRODUCT_TYPE_FAIL,
                payload: err.message
            });
        }
    }
}