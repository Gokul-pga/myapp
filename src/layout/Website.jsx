import React, { useEffect, useState } from 'react'
import Layout from './Layout';
import ProductCard from '../components/ProductCard';


function Website() {
  const BASE_URL ="https://fakestoreapi.com"
  const [allProducts, setallproducts] = useState([])

const getAllProducts =async()=>{
const result =await fetch(`${BASE_URL}/products`).then((res)=>res.json()).then((res)=>res)
setallproducts(result)
}
useEffect(() => {
  getAllProducts()
}, [allProducts])


  return (
    <>
    <Layout>
    
      {allProducts.map((product,id)=>{
        return(<ProductCard key={id} product={product}/>)
      })}
    </Layout>
    </>
  )
}

export default Website;