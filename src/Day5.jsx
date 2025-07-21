import React, { useEffect, useState } from 'react'

const Day5 = () => {
    let [count,SetCount]=useState(0);
    useEffect(()=>{
        console.log("hello");
        
    },[])
  return (
    <div>
        <button onClick={()=>{SetCount(count+1)}}>count{count}</button>

    </div>
  )
}

export default Day5