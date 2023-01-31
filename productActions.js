import axios from 'axios'
import {PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL,PRODUCT_FAIL,PRODUCT_SUCCESS} from '../constants/productConstants'

export const listProducts = (keyword='') => async (dispatch) => {
    try {
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        const config = {headers: {'Content-type': 'application/json'}}
        if(keyword !== null){
            const { data } = await axios.get(`http://127.0.0.1:8000/products/?keyword=${keyword}`,config)
            dispatch({type: PRODUCT_LIST_SUCCESS,payload: data})
        }else{
            const { data } = await axios.get('http://127.0.0.1:8000/products/',config)
            dispatch({type: PRODUCT_LIST_SUCCESS,payload: data})}
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.detail? error.response.data.detail: error.message,
})}}

export const getProduct = (id) => async (dispatch) => {
    try {
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        const config = {headers: {'Content-type': 'application/json'}}
        const { data } = await axios.get(`http://127.0.0.1:8000/product/${id}`,config)
        dispatch({type: PRODUCT_SUCCESS,payload: data})
    } catch(error) {
        dispatch({
            type: PRODUCT_FAIL,
            payload: error.response && error.response.data.detail? error.response.data.detail: error.message,
})}}
