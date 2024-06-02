import React, { useEffect, useState } from 'react'
import"./Calculator.css"
const Calculator = () => {
    const [value,setValue]=useState ("");
    const[IsDark,setIsDark]=useState(true)
    const change=()=>{
        setIsDark(!IsDark)
       
       
    }
    
  return (


    <div className='container dark-mode'>
        <div className='calculator '>
           <button onClick={change}><i class ={IsDark ?"fa fa-moon-o":"fa fa-sun-o"}></i></button>

            <form action="">
                <div className='display'>
                    <input type="text" value={value} />
                </div>
                <div>
                    <input type="button" value="AC"onClick={e => setValue("")}className='ac'/>
                    <input type="button" value="DE"onClick={e => setValue(value.slice(0,-1))}className='ac' />
                    <input type="button" value="."onClick={e => setValue(value + e.target.value)} className='ac'/>
                    <input type="button" value="/"onClick={e => setValue(value + e.target.value)}className='ac' />
                </div>
                <div>
                    <input type="button" value="7"onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="8"onClick={e => setValue(value + e.target.value)} />
                    <input type="button" value="9"onClick={e => setValue(value + e.target.value)} />
                    <input type="button" value="*"onClick={e => setValue(value + e.target.value)}className='ac'/>
                </div>
                <div>
                    <input type="button" value="4"onClick={e => setValue(value + e.target.value)} />
                    <input type="button" value="5"onClick={e => setValue(value + e.target.value)} />
                    <input type="button" value="6"onClick={e => setValue(value + e.target.value)} />
                    <input type="button" value="+"onClick={e => setValue(value + e.target.value)}className='ac'/>
                </div>
                <div>
                    <input type="button" value="1"onClick={e => setValue(value + e.target.value)} />
                    <input type="button" value="2"onClick={e => setValue(value + e.target.value)} />
                    <input type="button" value="3"onClick={e => setValue(value + e.target.value)} />
                    <input type="button" value="-"onClick={e => setValue(value + e.target.value)}className='ac'/>
                </div>
                <div>
                    <input type="button" value="00" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="0"onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="="onClick={e => setValue(eval(value))}className='equal '/>
                    
                </div>
               
            </form>


        </div>


      
    </div>
  )
}

export default Calculator
