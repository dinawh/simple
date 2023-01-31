import React,{useEffect} from 'react'
import {Image} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams} from 'react-router-dom'
import { listProducts } from '../actions/productActions'
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function HomePage() {
  const location = useLocation();
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error,products} = productList
  const [searchParams,setSearchParams]=useSearchParams()
  const navigate = useNavigate()
  let keyword = searchParams.get('keyword')
  
  useEffect(() => {
    console.log(location.search)
    dispatch(listProducts(keyword))
    if(location.search && products.length===0){
      navigate('/')
    }
  }, [dispatch,keyword,location,navigate,location.search,products.length])
 
  return (
    <div>
      {error ? <h1>{error}</h1>: 
      <div>
        {products.map(product=>(
          <div key={product.id} onClick={()=>navigate(`product/${product.id}`)}>
            <h1>name: {product.name}</h1>
            <h1>description: {product.description}</h1>
            <Image src={product.image} fluid width='100px' height='222px'/>
            <Image src={product.QR_CODE} fluid width='100px' height='222px'/>
            <Image src={product.pdf_file} fluid width='100px' height='222px'/>
          </div>
        ))}
      </div>}
    </div>
  )
}
//<button onClick={()=>navigate('/register')}>help</button> 
export default HomePage