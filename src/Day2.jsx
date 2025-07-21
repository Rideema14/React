import { useState } from "react"
const Day2 = () => {
    // let[count,SetCount]=useState(0);
    // let[color,SetColor]=useState(true);
 
    // function fun1() {
    //      SetCount(count+1);   
    // }
    let [input,SetInput]=useState("");
    function fun1(e) {
        SetInput(e.target.value)
    }
  return (
    // <div style={{backgroundColor:color?"lightpink":"yellow",height:"400px"}}>
    //     <h2>{count}</h2>
    //     <button onClick={fun1}>click</button>
    //     <button onClick={()=>SetCount(count-1)}>dec</button>
    //     <button onClick={()=>SetCount(0)}>0</button>
    //     <button onClick={()=>SetColor(!color)}>change</button>
    // </div>
    <div>
    
<h2>{input}</h2>
        <input  onChange={fun1} type="text"></input>
        
    </div>
  )
}

export default Day2
