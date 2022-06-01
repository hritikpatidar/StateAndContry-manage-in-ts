import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function Table() {
    let state = useSelector((state:any) => state)
    console.log("state",state)
   
   
    const Navigate = useNavigate();
    //2. function defination
    return (
        <>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.user.map((cv:any,index:number)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{cv.first_name}</td>
                                    <td>{cv.last_name}</td>
                                    <td>{cv.age}</td>
                                    <td>{cv.email}</td>
                                    <td>
                                        <button>Viwe</button>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button type="submit" className="btn btn-primary" onClick={()=>{ Navigate('/form')}}>Add More Data</button>
        </> 

    )
}

export default Table
