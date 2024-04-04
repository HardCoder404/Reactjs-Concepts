import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,                  // yha tumhari initial state define hoti hai.. like starting me kya hogi value 
}


// Ye teeno imp. hote hia likhna ---------> 
// name:                                                --> ye naam tum kuch v rakh sakte ho !!
// initialstate,                                        --> ye whi h jo upper define kra hai tumne 
// reducers:{}                                          --> eske andr funtionality likhi jati h 

export const counterSlice = createSlice({
    name:"counter",                               
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        }
    }
})


export const {increment,decrement} = counterSlice.actions           // yha us functionality ko export krte h
export default counterSlice.reducer                                 // sath hi component ka naam v 






/*
    Step 5 : use code from the browser, now, ab jo tum reducers me likho ge na wo functionality ko chalane k lie hoga.. like tumhare feature ka naam h counter, mtlb ki number bdao..toh uski functioonlity yha likhoge, ess reducers k andr.... 


*/