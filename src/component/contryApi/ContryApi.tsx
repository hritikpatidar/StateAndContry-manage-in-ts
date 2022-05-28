import React, { useEffect, useState } from 'react'
const axios = require('axios').default;



function ContryApi() {
    //state/variables
    const [contry, setContry] = useState<any>([]);
    const [state, setState] = useState<any>([]);
    const [cities, setCities] = useState<any>([])

    useEffect(() => {
        handalClick()
    }, [])


    //function defination
    //https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json
    let handalClick = async () => {
        try {
            const res = await axios.get('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json')
            // console.log("res", res.data);
            setContry(res.data);
        } catch (error) {
        }
    }

    let handalChange = (e: any) => {
        const value = e.target.value
        var contrData = contry.filter((element: any) => {
            return element.name === value;
        })
        setState(contrData[0].states)
    }
    console.log("states", state)
    let handalChange1 = (e: any) => {
        const value = e.target.value;
        var stateData = state.filter((element: any) => {
            return element.name === value;
        })
        setCities(stateData[0].cities);
    }
    console.log("cities", cities)

    return (

        <div>
            <div>
                <label>Choose a contry</label>
                <select onChange={handalChange} >
                    <option>select contry</option>
                    {
                        contry.map((cv: any, index: number) => {
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
                <label>Choose a states</label>
                <select onChange={handalChange1} >
                    <option>select state</option>
                    {
                        state.map((cv: any, index: number) => {
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
                <label>Choose a citys</label>
                <select>
                    <option>select cities</option>
                    {
                        cities.map((cv: any, index: number) => {
                            return (
                                <React.Fragment key={index}>
                                    <option>{cv.name}</option>
                                </React.Fragment>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default ContryApi
