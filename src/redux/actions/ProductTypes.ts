export interface ProductTypes {
    id: number,
    name: string,
    is_active: string;
    created: string,
    updated: string,
}

export enum ActionType {
    PRODUCT_TYPE_PENDING = 'PRODUCT_TYPE_PENDING',
    PRODUCT_TYPE_SUCCESS = 'PRODUCT_TYPE_SUCCESS',
    PRODUCT_TYPE_1_SUCCESS = 'PRODUCT_TYPE_1_SUCCESS',
    PRODUCT_TYPE_UPDATE = 'PRODUCT_TYPE_UPDATE',
    PRODUCT_TYPE_FAIL = 'PRODUCT_TYPE_FAIL',
    PRODUCT_TYPE_STORE = 'PRODUCT_TYPE_STORE'
}

interface actionPending {
    type: ActionType.PRODUCT_TYPE_PENDING;
}
interface actionSuccess {
    type: ActionType.PRODUCT_TYPE_SUCCESS;
    payload: ProductTypes[];
}
interface actionProductType {
    type: ActionType.PRODUCT_TYPE_1_SUCCESS;
    payload: ProductTypes[];
}
interface actionFail {
    type: ActionType.PRODUCT_TYPE_FAIL;
    payload: string ;
}

export type Action = actionPending | actionSuccess | actionFail | actionProductType;
