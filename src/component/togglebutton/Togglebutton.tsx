import { useState } from "react"


export function Togglebutton(){
    const [istoggle, setIstoggle] = useState(false)
    return (
        <>
            <input type="checkbox" checked={istoggle} onChange={(e:any)=>{setIstoggle(e.target.vlaue)}} />
        </>
    )
}