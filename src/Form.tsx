import React, { useState } from 'react'

interface data {
    name:string;
    age:number;
}

let initialState={
    name:"",
    age:0 ,
}


function Form() {
    const [data, setData] = useState<data>(initialState);


    function handalChange(e:any){
        let name = e.target.name;
        let value = e.target.value;
        setData({
            ...data,
            [name]:value
        })
    }
    console.log(data)
    let handalShubmit =(e:any)=>{
        e.preventDefault();
        console.log(data.name)
        console.log(data.age)
    }
    return (
        <form>
            <label>user Name:-</label>
            <input type="text" name="name" value={data.name} onChange={(e:any)=>{handalChange(e)}}/><br/><br/>
            <label>userAge:-</label>
            <input type="number" name="age" value={data.age} onChange={(e:any)=>{handalChange(e)}}/><br/><br/>
            <button onClick={(e)=>{handalShubmit(e)}}>Submit</button>
        </form>
    )
}

export default Form
