import React, { useEffect, useState } from 'react'
const axios = require('axios').default;



function ContryApi() {
    //state/variables
    const [contry, setContry] = useState([])
    const [state, setState] = useState([]);

    useEffect(() => {
        handalClick()
    }, [])
    //function defination
    //https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json
    let handalClick=async()=>{
        try {
            const res =await axios.get('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json')
            console.log(res.data);
            setContry(res.data)
            setState(res.data)
        } catch (error) {
            
        }
    }
    //console.log("state",state)
    //return statement/jsx
    return (
        <div>
            <button onClick={handalClick}>click me</button>
            <div>
                <label htmlFor="cars">Choose a contry</label>
                    <select name="cars" id="cars">
                        {
                            contry.map((cv:any,index:number)=>{
                                // console.log('cv',cv.name)
                                 return (
                                     <React.Fragment key={index}>
                                        <option>{cv.name}</option>
                                     </React.Fragment>
                                 )
                            })
                        }
                    </select>
            </div>
            <div>
                <label htmlFor="cars">Choose a states</label>
                    <select name="cars" id="cars">
                        {
                            state.map((cv:any,index1:number)=>{
                                console.log('cv1',cv.states)
                                 return (
                                     <React.Fragment key={index1}>
                                        <option >{cv.states.name}</option>
                                     </React.Fragment>
                                 )
                            })
                        }
                    </select>
            </div>
            <div>
                <label htmlFor="cars">Choose a citys</label>
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
            </div>

           
        </div>
    )
}

export default ContryApi
