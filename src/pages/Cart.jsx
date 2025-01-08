import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'80px'}} className='px-5'>
      <h1 className='' >Cart Summary</h1>

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
            <td>1</td>
            <td>Product</td>
            <td>
              <img width={'70px'} height={"70px"} src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?semt=ais_hybrid" alt="" />
              </td>
            <td>
              <button className='font-bold'>-</button>
              <input style={{width:"40px"}} className='border p-1 rounded mx-2' type="text" readOnly/>
              <button className='font-bold'>+</button>
            </td>
            <td>
              $299
            </td>
            <td>
              <button className='text-red-800'><i className='fa-solid fa-trash'></i></button>
            </td>
          </tbody>
         </table>

         <div className='float-right mt-4'>
            <button className='bg-rose-600 rounded p-2 text-white'>
              Empty Cart
            </button>
            <Link to={'/'} className='bg-blue-600  ms-3 rounded p-2 text-white' > Shop More....</Link>
         </div>
        </div>
        
        <div className='col-span-1'>
           <div className=' border shadow p-5' >
              <h2 className='text-2xl font-bold my-4'>
                Total Amount
                <span className='text-rose-600'>$9.99</span>
              </h2>
              <hr />
              <button className='bg-green-600 rounded p-2 text-white w-full mt-4'>Check Out</button>
           </div>
        </div>
     </div>
    </div>
    </>
  )
}

export default Cart