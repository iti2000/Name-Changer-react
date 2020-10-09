import React, { useContext, useState } from 'react'
import { MyContext } from '../context/MyContext'

export default function Name() {
    const [name,setName] = useState('')

    const {namedispatch} = useContext(MyContext)

    const change = (e)=>{
        e.preventDefault()
        namedispatch({type:"CHANGE",name})
        setName('')
    }
    const append = (e)=>{
        e.preventDefault()
        namedispatch({type:"APPEND",name})
        setName('')
    }
    const reset = (e)=>{
        e.preventDefault()
        namedispatch({type:"RESET",name})
        setName('')
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <button onClick={change}>Change</button>
                <button onClick={append}>Append</button>
                <button onClick={reset}>Reset</button>
            </form>
        </div>
    )
}
