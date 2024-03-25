import React, { useState } from 'react'

const App = () => {
  const [Name, setName] = useState("")
  const [update, setUpdate] = useState()

  const handleChanges = (e)=>{
    
    console.log(e.target.value);         // e.target.value se mai us value ko target krpara hu .. jo mai apne input box me likh raha hu
    setName(e.target.value)
  }

  const submitHandle = (e)=>{
    e.preventDefault();               // eska mtlb..jab hum hit kre toh page reload na ho.. 
    setUpdate(Name);
  } 

  return (
    <div style={{backgroundColor:"lightyellow", width:"100%", height:"100vh"}}>

      {/* This is all about a single input filed .. agar ek se jada input field hotoh..unhe dusre tarikese handle krte hai ...  */}
    <form onSubmit={submitHandle}>
    <label> Name: </label><br />
    <input type="text" value={Name} onChange={handleChanges} />
    <button type='submit'>Submit</button>
    <h1>Result : {update}</h1>
    </form>
</div>
  )
}

export default App


// esme jab v hum input form lete hia toh..usme onChange event likhni hi padti hai..tabhi hum apne form ko change kr sakte hai... ya kuch task perform kr sakte hai.. 


// NOTE: jab v hum form tag use krte hia..toh wo refresh krdeta hai..page jab v submit pe click krenge toh.. ya enter hit krte hai toh... inshort.. ye form tag ka default behaviour hai 

