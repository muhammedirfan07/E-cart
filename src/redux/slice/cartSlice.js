import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:'cartSlice',
    initialState:[],
    reducers:{
        //action name : reducer function
        addToCart : (state,actionByComponents)=>{
           const exisitingProduct = state.find(items=>items.id===Number(actionByComponents.payload.id) )
           if(exisitingProduct){

           }else{
            state.push({...actionByComponents.payload,quantity:1,
                totalPrice :actionByComponents.payload.price
            })
           }
        }
    }
})