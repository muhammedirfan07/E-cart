import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slice/wishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'

const Wishlist = () => {
  //remove dispach
 const dispatch=useDispatch()
   
  // add list wishlist
  const userWishlist =useSelector(state=>state.wishlistReducer)
  

 // cart add
  const userCart = useSelector(state=> state.cartReducer )

  const handleCart =(product)=>{
      dispatch(removeItem(product?.id)) 
      dispatch(addToCart(product))
      const existingProduct = userCart?.find(item=>item.id==id)
      if(existingProduct){
        alert(" cart product quandity Incermenting..!")
      }else{
        alert("product  add to cart..!")
      }
     }

  return (
    <>
     <Header/>
     <div style={{paddingTop:"80px"}} className='px-5'>
     {
      userWishlist?.length>0 ?
      <>
       <h1 className='text-3xl text-red-600 mb-3'>My wishlist</h1>
       <div className='grid grid-cols-4 gap-4'>
       {
        userWishlist?.map(product=>(
          <div className='rounded-xl border shadow p-2'>
          <img width={'100%'} height={"200px"} src={product?.thumbnail}alt="" />
          <div className='text-center'>
           <h3 className='text-xl font-bold'>{product?.title}</h3>
            <div className='flex justify-evenly mt-3'>
               <button onClick={()=>dispatch(removeItem(product?.id))} className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-700'></i></button>
               <button onClick={()=>handleCart(product)} className='text-xl'><i className='fa-solid fa-cart-plus text-greeen-700'></i></button>
            </div>
          </div>
        </div>
        ))
       }
       </div>
     </>
     :
     <div className='flex justify-center items-center h-screen'>
      <img width={"400px"} height={'400px'} src="https://tseppas.com/static/media/cart.9ab7bf3af43a230ebc67.gif" alt="" />
      <h1 className='text-red-600'>your wishlist empty</h1>
     </div>
     }
     </div>

    </>
  )
}

export default Wishlist