import React, { useEffect, useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0);
  const [naam,setNaam]=useState("Prince");

  // Case 1: initializing useEffect    ( esme jab jab kisi value me change hogi.ya page render hoga..tab tab ye call hoga)

  // useEffect(()=>{
  //   alert("clicked");
  // })

  // Case 2 : initalize only one time  (mtlb jab aap page ko refresh kroge...tab hi chlega uske bad nahi)

  // useEffect(()=>{
  //   alert("bas ek bar hi chlega")
  // },[])


  // Case 3: initialize only when a particular data changed  (mtlb do button hai manlo.. ab usme se mai chahta hu ek pe click kru toh hi useEffect call ho,, dusre wale pe click kru toh nahi) 
  
    // useEffect(()=>{
    //   alert("naam change hoga bhai");
    // },[naam])


  // Final Case : 
  // useEffect(()=>{
  //   // this run only when the component mounts
  //   return ()=>{
  //   // this run only when the component unmounts 
  //   }
  // },[])


  return (
    <div>
    <button onClick={()=>setCount(count+1)}>count is {count}</button><br /><br />
    <button onClick={()=>setNaam("Tanish")}>name is {naam}</button>
    </div>
  )
};

export default App






// useEffect : basically, ye ye chiz kahata hia ki.. agar page reload ho to render hoga ...agar useEffect tumhare component me hai toh... also.. agar tumne koi kaam kr dia...uske baad v tum chah re ho ki.. ye chiz ho .... toh us case me useEffect use hota hia...Ye basicallly , useState hook pe hi based hota h..qki useState me data render hota h... toh value change hoti h..or page render  hoga..toh useEffect call hoga... to ha 

// Like.. tumne koi button banaya.. uspe click kro toh ek pop up show ho..ki u clicked me.. phir jab aap again click kro toh.. phir msg show ho u clicked me or us caounter ki value jaise jaise badhti rahe click krne pe..waise waise pop up show ho..qki page render hora h..or render hote hi...useEffect call hora hia..so yeah That is it.








// UseCases of useEffect in React , read the below link documentation.

// Link : https://dev.to/colocodes/6-use-cases-of-the-useeffect-reactjs-hook-282o