import React from 'react'
import { useState } from 'react'              // Step 1: import useState where we you want to use.

const App = () => {
  const [count,setCount]=useState(0);        // step 2: initalise it here & initial value can be anything
  
  return (
    <div>
      <h1>Count is {count} </h1>
      <button onClick={()=>setCount(count+1)}>+</button>        {/*  here use that */}
      <button onClick={()=>setCount(count-1)}>-</button>        {/*  here use that */}
    </div> 
  )
}

export default App





// dekho yrr..ye jo maine line no. 10 me likha hai na... ase arrow function bna ke..wo maine short krkr likha hia..tum usko upper define v kr sakte the..then yha use v kr sakte the .. jarrori nahi tha ki ase hi tum v likho..just for the sake of simplicity maine ase likha. 