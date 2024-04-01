import React, { useEffect, useState } from 'react'
import axios from 'axios';

function PostApi() {
    const [Name,setName] = useState("");
    const [body,setBody] = useState("");
    const [IsError,setIsError] = useState("");

    const handleSubmit = (e) => {
        try {
            e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/posts",{
            title: Name,
            Body: body
        })
        .then((res)=>{
           console.log(res);
        })
        } catch (error) {
            setIsError(error.message)
        }
    }
    

    // NOTE: If you are already using onSubmit in your form and you only want the POST request to be triggered when the form is submitted, then you don't necessarily need to use useEffect for this purpose.
  return (
    <div>
        {IsError !=="" && <h1>{IsError}</h1>}
      <form onSubmit={handleSubmit}>
        <label>Name </label>
        <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} />
        <br /><br />
        <label>Body </label>
        <input type="text" value={body} onChange={(e)=>setBody(e.target.value)}  />
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default PostApi
