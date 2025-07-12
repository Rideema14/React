import  './App.css'
import React from 'react'
const App=()=> {
    // let arr=[1,2,3,4]
    function fun1() {
      console.log("hello"); 
    }
  return (
  //   <div> App {arr.map((a,b,c)=>{
  //   return(<><h1>a</h1></>)
  //  })}</div>
  <div>
   <button onClick={fun1}>click</button>
  </div>

  )
}

export default App


