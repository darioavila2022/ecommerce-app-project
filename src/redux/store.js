//USING ACTIONS AND REDUCERS FROM CARTREDUX.JS
//CREATING A GLOBAL STORE TO USE IT IN ALL PAGES AND COMPONENTS

import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartRedux"


//CREATING STORE:
export default configureStore({// OPENING NEW OBJECTS
    reducer:{ //USING MORE THAN ONE REDUCER BECAUSE THERE WILL BE MORE
        cart: cartReducer,
    }
})