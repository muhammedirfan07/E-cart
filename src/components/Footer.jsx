import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div style={{height:'300',marginTop:'10px'}} className='w-full bg-slate-600 text-white ' >
      <div className='flex justify-between p-4'>
       <div style={{width:"400px"}}className='intro' >
       <h5 className="text-2xl font-bold mb-3" style={{fontFamily:"Michroma"}}>
       <i className='fa-solid fa-truck-fast me-1 '></i>
        E-Cart
       </h5>
       <div className='text-sm'>
         <p className='mb-1' >
              A responsive navigation header, including support for branding, navigation, and more. Here’s an example of all the sub-components .
              </p>
              <p className='mb-1'> Code licensed MIT, docs CC BY 3.0.</p>
              <p className='mb-1'>Currently v5.3.3.</p>
       </div>
        

       </div>

       <div className="flex flex-col">
            <h4 className="text-2xl font-bold mb-3">Link</h4>
            <Link className="mb-3" to={"/"} style={{textDecoration:"none",color:"white"}}>Home Page </Link>
            <Link className="mb-3" to={"/cart"} style={{textDecoration:"none",color:"white"}}>cart page  </Link>
            <Link className="mb-3" to={"/wishlist"} style={{textDecoration:"none",color:"white"}}>Wishlist Page </Link>
        </div>
        <div className="flex flex-col">
            <h4 className="text-2xl font-bold mb-3 ">Guide</h4>
            <a className="mb-3" style={{textDecoration:"none",color:"white"}} target="_blind" href="https://react.dev/">React</a>
            <a className="mb-3" style={{textDecoration:"none",color:"white"}} target="_blind" href="https://reactrouter.com/">React Router</a>
            <a className="mb-3" style={{textDecoration:"none",color:"white"}} target="_blind" href="https://react-bootstrap.netlify.app/">React Bootstrap</a>
        </div>
        <div className="flex flex-col">
            <h4 className="text-2xl font-bold mb-3">Contacts</h4>
            <div className="flex flex-row mb-1">
                <input className="form-control rounded ps-2 me-1" type="text" placeholder=" enter your email.." />
                <button className="p-2 rounded bg-slate-500 text-white"><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="flex justify-between mt-3 p-2">
              <a className="mb-3" style={{textDecoration:"none",color:"white", fontSize:"18px" }} href="https://x.com/?" target="_blind"><i  class="fa-brands fa-twitter"></i></a>
              <a className="mb-3" style={{textDecoration:"none",color:"white", fontSize:"18px" }} href="" target="_blind"><i class="fa-brands fa-instagram"></i></a>
              <a className="mb-3" style={{textDecoration:"none",color:"white", fontSize:"18px" }} href="" target="_blind"><i class="fa-brands fa-facebook"></i></a>
              <a className="mb-3" style={{textDecoration:"none",color:"white", fontSize:"18px" }} href="" target="_blind"><i class="fa-brands fa-github"></i></a>
              
            </div>
             
        </div>
      </div>


    </div>
  )
}

export default Footer