
import React,{useContext} from 'react'
import { MyContext } from '../context/MyContext';


export default function Heading() {

    const {name,surname} = useContext(MyContext);
    return (
        <div>
            <h1>Hello World , {name} {surname}</h1>
        </div>
    )
}
