import React, { createContext } from 'react'
import ChildA from './ChildA'

// What is useContext Hook 
// Remember three keywords : create, provider, useContext
// how to use it


//     YHA MAINE NESTED COMPONENT BANAYA HIA... APP.JS---> CHILDA---->CHILDB--->CHILDC

export const data=createContext();       // step1: create context kro or usko export krdo
function App() {
  return (
    <div>
    <data.Provider value={"prince"}>    {/* step2: or jis v naam se wo create kia tha..let suppose us time tumne data naam se kai h toh.yha v data.provider krk es children ko wrap krdo.  or direct usi file me jaao jaha tumne use krni hai..value */}
         <ChildA/>  
      </data.Provider>
    </div>
  )
}

export default App






// useContext : useContext basically hum contextApi ko overlead krne k lie use kr te hai... or prop drilling se bahchne k lie.. like suppose ek main aap hia..App.js ab eske bahut sare components hai.. or ab un sub components k v bahut subcomponents hai... toh ab manlo kal ko mko component 1 se component 50 wale me data bejhna ho ...toh hum prop by prop toh pass nahi krenge na..qki lengty hai.. or unusable v...so usi ko solve krne k lie aya hia ..useContext. 
