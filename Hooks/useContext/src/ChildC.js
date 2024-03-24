import React, { useContext } from 'react'
import { data } from './App'

function ChildC() {
  const name = useContext(data);          // step3: aagye yha.. ab an usecontext likho... uske andr wo createcontext wala variable pass krdo..or ensab ko ek const me store krwalo..then 
  return (
    <div>
      i m {name} Raj                         {/* step 4: ab us variable ko yha use krlo..direct.. bs hogya*/}
    </div>
  )
}

export default ChildC
