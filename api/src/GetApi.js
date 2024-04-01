import React,{useEffect,useState} from 'react'
import axios from 'axios'
const GetApi = () => {
const [Mydata, setMydata] = useState([])
const [IsError, setIsError] = useState("")

const BASE_URL = "https://jsonplaceholder.typicode.com";   // or na yha pe..sirf base url link aata hai..mtlb ki jo forward slash lga ke aagae aage jate hai na..wo sab nahi likhna...wo sab niche likhegne..bs yha pe simple url likh do..ab us particular section k andr jane k lie niche /slash ka use krk..ja sakte h.




// *********USING APIs with PROMISES*********

  // useEffect(()=> {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then((res)=>
  //   setMydata(res.data)
  //   )
  //   .catch((error)=>
  //     setIsError(error.message)
  //   )
  //  },[])



  // **************** Using Apis with Async Await *******************

  // const getApiData = async() =>{
  //   try {                         // es method me try-catch ki help se error handling krte h
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  //   setMydata(res.data);
  //   } catch (error) {
  //     setIsError(error.message)
  //   }
  
  // }

  // useEffect(()=>{
  //   getApiData(); 
  // },[])





  // ***************** Best way to use APIs with Axios ********************
// step1: top pe jaake import wale k niche... ek varible bna lo koi or uske andr ye wala url dal do
// step2: jaha us function ko call kra hai uske andr ... `${BASE_URL}/posts`  ase likh do.. post k andr whi aayga jo us url ka end point hoga... or BASE_URL whi hai.. jo top pe declare kia tha
// step3: jo function hoga, uske andr ab simple ek argument jyga or whi argume .get() k andr likhna hai.

const getApiData = async(url) =>{
  try {
    const res = await axios.get(url)
    setMydata(res.data)
  } catch (error) {
    setIsError(error.message)
  }
}

  useEffect(() => {
    getApiData(`${BASE_URL}/posts`);        // slash eslie lgaya qki..jis v page pe jana hai wo likh do bs
  }, [])
  
  
  return (
     <div>
      {/* es line ka mtlb hai ki agar error hua toh hi wo error message dikhao wrna mat dikhao.. && ka yhi kam hai bs  */}
      {IsError !=="" && <h1>{IsError}</h1> }         
      {
        Mydata.slice(0,12).map((post)=>{       // slice ka use krk humne data kam krwa dia..mtlb 0-12 tk k hi data milenge
          const {id,title,body}=post;          // destructuring 
          return <div key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        })
      }
     </div>
      
  )
}

export default GetApi






 


// API : Application Program Interface., basically APIs jo hai wo JSON format me hoti hai,,, or unko get kerne k lie hi bahut se methods hote hai, like, GET,POST,Delete, or v hai.. toh ek tarike se api u samjhlo..jaise hume koi data chyie kisi dusri platform se toh wo hum apis k through krte h. 

// Axios : ye ek trh ka npm hai,, jo ki external apis ko ya external url ko hit krne ka.. apne website pe 


// Stage 1 : hum na axios use krte hai.. mostly ab ke time me qki..mtlb pahle fetch use krte the api ko get krne k lie .... lkin ab axios use krte hai.. qki esme thode se hume advantages mil jate hai over fetch. 


// NOTE: hum commonly, useEffect hook ke andr hi apis methods likhte h. 