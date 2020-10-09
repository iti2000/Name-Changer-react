import React, { useContext, useState } from 'react'
import { MyContext } from '../context/MyContext'

export default function Surname() {

    const [surname,setSurname] = useState('')

    const {surnamedispatch} = useContext(MyContext)

    const change = (e)=>{
        e.preventDefault()
        surnamedispatch({type:"CHANGE",surname})
        setSurname('')
    }
    const append = (e)=>{
        e.preventDefault()
        surnamedispatch({type:"APPEND",surname})
        setSurname('')
    }
    const reset = (e)=>{
        e.preventDefault()
        surnamedispatch({type:"RESET",surname})
        setSurname('')
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Surname" value={surname} onChange={(e)=>setSurname(e.target.value)}/>
                <button onClick={change}>Change</button>
                <button onClick={append}>Append</button>
                <button onClick={reset}>Reset</button>
            </form>
        </div>
    )
}
