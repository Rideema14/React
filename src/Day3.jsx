
import { useState } from "react"
const Day3 = () => {
    let [input,SetInput]=useState({
        name:"",
        value:""

    });
          function fun1(e) {
            let {name,value}=e.target;
            
        SetInput(e.target.value)
    
    }
  return (
    <div>
        <fieldset>
            <form>
                <input  name="name" value={input.value}  onChange={fun1} type="text"></input>
                    <input  name="password" value={input.name} onChange={fun1}type="password"></input>
            </form>
        </fieldset>
    </div>
  )
}

export default Day3