import {useParams} from 'react-router-dom'
import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {getProduct} from '../actions/productActions'

function Product() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const product_data = useSelector(state=>state.product)
    const {product,error} = product_data

    useEffect(()=>{
        dispatch(getProduct(id))
    },[])

    return (
        <div>

            <h1>Product</h1>
            {error ? <h1>{error}</h1> : 
            <div>
                <h1>product name: {product.name}</h1>
                <h1>product name: {product.description}</h1>
            </div>}
        </div>
    )
}

export default Product