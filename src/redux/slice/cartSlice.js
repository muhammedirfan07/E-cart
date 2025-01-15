import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:'cartSlice',
    initialState:[],
    reducers:{
        //action name : reducer function
        addToCart : (state,actionByComponents)=>{
           const existingProduct = state.find(items=>items.id===Number(actionByComponents.payload.id) )
           if(existingProduct){
               existingProduct.quantity++
               existingProduct.totalPrice=existingProduct.quantity * existingProduct.price
            const remaingProducts =state.filter(item=>item.id!=existingProduct.id)
            state=[...remaingProducts,existingProduct]
           }else{
            state.push({...actionByComponents.payload,quantity:1,
                totalPrice :actionByComponents.payload.price
            })
           }
        },
        incrementQuandity:(state,actionByCart)=>{
            const existingProduct = state.find(items=>items.id===Number(actionByCart.payload) )
           if(existingProduct){
               existingProduct.quantity++
               existingProduct.totalPrice=existingProduct.quantity * existingProduct.price
            const remaingProducts =state.filter(item=>item.id!=existingProduct.id)
            state=[...remaingProducts,existingProduct]
           }
        },
        removeCartItem :(state,actionByCart)=>{
            return state.filter(item=>item.id!==actionByCart.payload)
        },
        decrementQuandity:(state,actionByCart)=>{
            const existingProduct = state.find(items=>items.id===Number(actionByCart.payload) )
           if( existingProduct){
                existingProduct.quantity--
                existingProduct.totalPrice=existingProduct.quantity * existingProduct.price
              const remaingProducts =state.filter(item=>item.id!=existingProduct.id)
            state=[...remaingProducts,existingProduct]
           }
        },
        emptyCart :(state)=>{
            return state=[]
        }
        
    }
})
export const {addToCart,incrementQuandity,removeCartItem,decrementQuandity,emptyCart}= cartSlice.actions
export default cartSlice.reducer