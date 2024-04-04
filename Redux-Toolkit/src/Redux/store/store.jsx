import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";

export const store = configureStore({
    reducer :{
        prince:counterSlice,
    },
})





/* Step 1 : sabse pahale ek folder bna lo "Redux" naam se [jaroori nahi redux hi rkho..koi v rkhlo]
   Step 2 : Har Redux folder me do hi folder bante hai.. (1) Slices    (2)  Store
    NOTE: har slices k andr wo feature aata hai..jo tum apne app me use krte ho..like liking, increment,dec.,
   Step 3 : Go to Store folder, ek file bnao uske andr.. store.jsx and then usme ye upper wala code likho. 
   (redux toolkit type kro browser pe wha se v reference le sakte ho)
                        import { configureStore } from "@reduxjs/toolkit";

                            export const store = configureStore({
                                reducer :{

                                },

    avi sirf itna hi likho, Now go to the Slice folder , wha ab har ek feature k lie ek file bnao., 
    Step 4 : (ab us slice wale file me jaao...aage ka step whi likha hai )

    Step 6 : [ padh lia na wha jaake.. nahi pdha toh jaao phadho fir aage ka step dekho ]

    Step 7 : ab reducer : {} eske andr sabse phale ek naam do : mendatory hai dena, (kuch v naam delo) then uske baad wo component ko import krk likho.. jo tumne slice me bnaya tha... 


    Step 8 : ab index.js wali file me jaao ( or wha ka steps dekho ) 

    Step 11 : [ ab app.js file me jaao for the further steps ]
        
})
*/
