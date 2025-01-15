import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuandity, emptyCart, incrementQuandity, removeCartItem } from '../redux/slice/cartSlice'

const Cart = () => {
   // rediction to page  
   const navigate=useNavigate()

   const dispatch =useDispatch()
   const userCart= useSelector(state=>state.cartReducer)

   // total amount of cart
   const [cartTotal,setCartTotal]=useState(0)

   useEffect(()=>{
    if(userCart?.length>0){
      setCartTotal(userCart?.map(item=>item.totalPrice).reduce((a1,a2)=>a1+a2))
    }
   },[userCart])

   const  handleDecrementQuandity =(product)=>{
    if(product?.quantity>1){
      dispatch(decrementQuandity(product?.id))
    }else{
      dispatch(removeCartItem(product?.id))
    }
   }

   const checkOut =()=>{
    dispatch(emptyCart())
    alert("Order is comfrom.... Thank You Parchasing with us...")
     // redirction to home page 
     navigate("/")
   }

  return (
    <>
    <Header/>
    <div style={{paddingTop:'80px'}} className='px-5'>
      
   {
    userCart?.length>0?
    <>
    <h1 className='text-blue-400' >Cart Summary</h1>
    <div className='grid grid-cols-3 gap-4 mt-5'>
       <div className='col-span-2 border shadow rounded p-5'>
        <table className='table-auto w-full'>
         <thead>
           <tr>
             <td className='font-semibold '>#</td>
             <td className='font-semibold '>Name</td>
             <td className='font-semibold '>Image</td>
             <td className='font-semibold '>Quandity</td>
             <td className='font-semibold '>Price</td>
             <td className='font-semibold '>...</td>
           </tr>
         </thead>
         <tbody>
          {
            userCart?.map((product,index)=>(
              <tr>
              <td>{index+1}</td>
              <td>{product?.title}</td>
              <td>
                <img width={'70px'} height={"70px"} src={product?.thumbnail} alt="" />
                </td>
              <td>
                <button onClick={()=>handleDecrementQuandity(product)} className='font-bold'>-</button>
                <input style={{width:"40px"}} className='border p-1 rounded mx-2' type="text" value={product?.quantity} readOnly/>
                <button onClick={()=>dispatch(incrementQuandity(product?.id))} className='font-bold' >+</button>
              </td>
              <td>
                { product?.price}
              </td>
              <td>
                <button onClick={()=>dispatch(removeCartItem(product?.id))} className='text-red-800'><i className='fa-solid fa-trash'></i></button>
              </td>
            </tr>
            ))
          }
         </tbody>
        </table>

        <div className='float-right mt-4'>
           <button onClick={()=>dispatch(emptyCart())} className='bg-rose-600 rounded p-2 text-white'>
             Empty Cart
           </button>
           <Link to={'/'} className='bg-blue-600  ms-3 rounded p-2 text-white' > Shop More....</Link>
        </div>
       </div>
       
       <div className='col-span-1'>
          <div className=' border shadow p-5' >
             <h2 className='text-2xl font-bold my-4'>
               Total Amount
               <span className='text-rose-600'>${cartTotal.toFixed(2)}</span>
             </h2>
             <hr />
             <button onClick={checkOut} className='bg-green-600 rounded p-2 text-white w-full mt-4'>Check Out</button>
          </div>
       </div>
    </div>
 </>
 :
 <div className='flex  justify-center items-center h-screen flex-col'>
 <img width={"400px"} height={'400px'} src="https://tseppas.com/static/media/cart.9ab7bf3af43a230ebc67.gif" alt="" />
 <h1  className='text-red-600 font-semibold text-xl'>your cart is empty.....</h1>
</div>
   }
    </div>
    </>
  )
}

export default Cart