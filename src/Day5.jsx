import React, { useEffect, useState } from 'react'
import './Day5.css'
const Day5 = () => {

    let [input ,SetInput]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos').
        then((res)=>{
            return res.json()

        }).then((data)=>{
            SetInput(data)
            console.log(data);
            
        })
        
    },[])

    function d(index){
       let nerArr=   input.filter((a)=>{
            return a.id!=index

        })
        SetInput(nerArr)
        // console.log(nerArr, "heheheheh");
    }
    function dataSave(data) {
      localStorage.setItem("key",JSON.stringify(data))
      
    }
    
  return (
    <div>
        {/* <button onClick={()=>SetCount(count+1)}> count {count}
        </button> */}
        <div id='parent_Card'>  
        {
            input.map((a,index)=>{
                return(
                // <div id='card'  onClick={()=>d(a.id)} >
                 <div id='card'>
                <h1>{a.id}</h1>
                <button onClick={()=>dataSave(a)}>add</button>
                </div>)
            })
        }
         </div>
    </div>
  )
}

export default Day5