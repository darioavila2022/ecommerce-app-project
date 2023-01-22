import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({// CREATING SLICE WITH REDUX
    name:"cart",// FIRST OBJECT
    initialState:{// INITIAL STATE OF OBJECT
        products:[],
        quantity:0,// HOW MANY OBJECTS IN THE CART AT THE BEGGINNG
        total:0,// $
    },
    reducers:{
        addProduct:(state,action) => { //ADD PRODUCTS IN CART TO INCREASE QUANTITY AND TOTAL. STATE MEANS THE PREVIOUS STATE SO NOW I UPDATE THAT PREVIOUS STATE
            state.quantity += 1// ONE PRODUCT ADDED TO CART
            state.products.push(action.payload.product)// PAYLOAD IS THE NEW PRODUCT ADDED
            state.total += action.payload.price
        },
    },
})

export const { addProduct } = cartSlice.actions
export default cartSlice.reducer //DEFAULT BECAUSE IT WILL BE USED IN THE STORE APP