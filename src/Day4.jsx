
import React, { useState } from 'react'
const Day4 = () => {
   let [input,SetInput]=      useState("")
   let [data,SetData]=      useState([])
   function fun1(){
    SetData([...data,input])
    console.log(data);
    SetInput("")
    
   }
   function d(index){
    const newArr=data.filter((a,id)=>{
        return id=!index;
    })
 SetData(newArr)
   }
  return (
    <div>
        <input    name='input' value={input}    onChange={(e)=>SetInput(e.target.value)}/>
        <button onClick={fun1}>click</button>
        {
            data.map((a)=>{
                return(<>
                <li>{a}</li>
                <button >x</button>
                </>)
            })
        }
    </div>
  )
}

export default Day4