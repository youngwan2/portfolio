import { useEffect, useState } from "react"
import { getCurrnetTime } from "../functions/time"

export default function Clock(){
    const [currentTime, setCurrentTile] = useState('')
    useEffect(()=>{
        const time = setInterval(()=>{
            setCurrentTile(getCurrnetTime())
        },1000)
        return () => {
            clearInterval(time)
        }
    },[currentTime])
    

    return (
        <article>   
            {currentTime}
        </article>

    )
}