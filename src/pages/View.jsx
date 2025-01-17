import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Wishlist from './Wishlist';
import { addToWishlist } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';

const View = () => {

// star rating

const starRating =(rating)=>{
 const stars=[]
 for(let i=0;i<5;i++){
  stars.push(
  <i key={i} 
  className={`fa-solid   ${ i <= rating?"fa-star text-sm text-yellow-500":"fa-star text-sm text-gray-200"} `}></i>   

  )
 }
 return stars;
}

 // cart
const userCart=useSelector(state=>state.cartReducer)
 
// wishlist
 const dispatch = useDispatch()
 const userWishlist = useSelector(state=>state.wishlistReducer)


  // product viewing
  const [product, setProduct] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (sessionStorage.getItem("allproducts")) {
      const allproducts = JSON.parse(sessionStorage.getItem("allproducts"));
      // console.log( allProducts.find(item=>item.id==id));
      setProduct(allproducts.find((item) => item.id=== Number(id)));
    }
  }, []);

  // wishlist add button action

  const  handleWishlist =()=>{
    const existingProduct =userWishlist?.find(item=>item.id === Number(id))
    if(existingProduct){
      alert('the product is already existing wishlist')
    }else{
       dispatch(addToWishlist(product))
    }
  }

  // cart add button action
   const handleCart =()=>{
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item.id ===Number(id))
    // if(existingProduct){
    //   alert(" cart product quandity Incermenting..!")
    // }else{
    //   alert("product  add to cart..!")
    // }
   }


  return (
    <>
      <Header />
      <div 
       className="flex flex-col mx-5 ">
        <div className="grid grid-cols-2 items-center h-screen">
          <img
            width={"450px"}
            height={"200px"}
            src={product?.thumbnail}
            alt=""
          />
          <div>
            <h3 className="font-bold"> PID :{product?.id}</h3>
            <h3 className="text-3xl font-bold"> {product?.title}</h3>
            <h5 className="font-bold text-red-600 text-2xl">
              ${product?.price}
            </h5>
            <h4><span className='font-bold'>Brand :</span>{product?.brand}</h4>
            <h4><span className='font-bold'>Category :</span>{product?.category}</h4>
            <p>
              <span className="font-bold">
                Discription:</span><span>{product?.description}</span>
             
              <div className="flex justify-between mt-5 px-5">
                <button onClick={handleWishlist} className="bg-blue-600 text-white p-2 rounded">
               
                  Add to whislist
                </button>
                <button onClick={handleCart} className="bg-green-600 text-white p-2 rounded">
                
                  Add to cart
                </button>
              </div>
            </p>
            {product?.reviews?.length > 0 ? (
              product?.reviews?.map((item) => (
                <div key={item?.date} className="shadow p-2 my-2">
                  <h5>
                    <span className="font-bold">{item?.reviewerName}</span>:
                    <span>{item?.comment}</span>
                  </h5>
                  <p>
                    Rating : {starRating(item?.rating )}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-red-600">no Review yet!!!</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default View;