import {PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL,PRODUCT_SUCCESS,PRODUCT_FAIL} from '../constants/productConstants'

export const productListReducer = (state={products:[]},action) =>{
    switch(action.type){
        case PRODUCT_LIST_SUCCESS:
            return {products:action.payload}
        case PRODUCT_LIST_FAIL:
            return {error:action.payload}
        default:
            return state
}}

export const productReducer = (state={product:{}},action) =>{
    switch(action.type){
        case PRODUCT_SUCCESS:
            return {product:action.payload}
        case PRODUCT_FAIL:
            return {error:action.payload}
        default:
            return state
}}