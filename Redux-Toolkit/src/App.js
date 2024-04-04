import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './Redux/slices/counterSlice'


const App = () => {
  const mystate =  useSelector((state)=>state.prince.value);  // yha prince whi hai..jo store me naam dia tha... or value whi variable hai jo initialstate me dia tha.. dekh lo ek baar jaake.. 
  const dispatch = useDispatch();
  return (
    <div className='flex justify-center items-center h-screen '>
      <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 " onClick={()=>dispatch(increment())}>+</button>
      
      <h1>{mystate}</h1>

      <button type="button" className="text-white ml-2 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default App


/*  
  Step 12 : sabse pahle {useDispatch, useSelector} ye dono import kro, then {increment,decrement} ye functionality ko jo tumne slices k andr likhi thi..reducers k andr... or usko export kia tha..aaya yad ! 

  Step 13 : useSelectore : hum basically us funtionality ko fetch krne k lie use krte hia..
  and useDispatch hum usko call krne k lie use krte hai 

  Step 14 : const mystate =  useSelector((state)=>state.prince.value);
  const dispatch = useDispatch();

  ab ye dono yha declare krdo... variable name kuch v rkhlo.. 

  Step 15 : jis v element pe click krne pe tum wo funtionality update krna chahte ho..uspe ek onClick handler lgao... or usme wo functinlity ko pass kro..jaise upper kia hia...


    YOU ARE ALL SET TO GO >>>> 
*/

