import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slice/productsSlice'
import { applyMiddleware } from '@reduxjs/toolkit'



const Home = () => {
  const dispatch=useDispatch()

 const{allProducts,loading,errorMsg}=useSelector(state=>state.productReducer)
// console.log(allProducts,loading,errorMsg);

const [currentPage,setCurrentPage]=useState(1)
const productPerPage=8
const totalPages= Math.ceil(allProducts?.length/productPerPage)
const currentPageProductLastIndex=currentPage * productPerPage
const currentPageProductFirstIndex=currentPageProductLastIndex- productPerPage

const visibleProduct = allProducts?.slice(currentPageProductFirstIndex,currentPageProductLastIndex)



 useEffect(()=>{
  dispatch(fetchProducts())
 },[])

 const navigateToNaxtPage =()=>{
  if(currentPage!==totalPages){
    setCurrentPage(currentPage+1)
  }
 }
 const navigateToPrivousPage =()=>{
  if(currentPage!==1){
    setCurrentPage(currentPage-1)
  }
 }

 
  return (
    <>
   <Header insideHome={true}/>
     <div style={{paddingTop:'80px' }} className='container px-4 mx-auto'>
      {
        loading?
        <div className='flex justify-center items-center  m-56'>
          <h1 style={{marginRight:'-4% ',zIndex:"1"}} className='text-3xl '>Loading...</h1>
            <img width={"100px"} height={"100px"} src="https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif" alt="" />  
        </div>
        :
        <>
          <div className='grid grid-cols-4 gap-4'>
         {
          allProducts?.length>0 ?
          visibleProduct?.map(products=>(
          <div key={products?.id} className='rounded border shadow p-2'>
          <img width={'100%'} height={"200px"} src={products?.thumbnail} alt="" />
          <div className='text-center'>
           <h3 className='text-xl font-bold'>{products?.title}</h3>
           <Link to={`/${products?.id}/view`} className='bg-green-700 rounded p-2 mt-3 text-white inline-block ' > View more.... </Link>
          </div>
        </div>
          ))  
        :
        <div className='flex justify-center items-center font-bold text-red-700 text-lg'>
          prodct not founded........
        </div>
         }
        </div>

           {/* page slicing */}
         <div className='text-center mt-20 mb-10 text-2xl font-bold'>
          <span onClick={navigateToPrivousPage} className='cursor-pointer me-5'><i className='fa-solid fa-backward me-5'></i></span>
          <span className='cursor-pointer'><span className='text-gray-600'>{currentPage}</span>...{totalPages}</span>
          <span onClick={navigateToNaxtPage} className='cursor-pointer ms-5'><i className='fa-solid fa-forward ms-5'></i></span>
         </div>

        </>
      }
     </div>
    </>
  )
}

export default Home