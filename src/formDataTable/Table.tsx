
import { useNavigate } from 'react-router-dom'

function Table() {
    //1. state variable /hooks
    const Navigate = useNavigate();
    return (
        <>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>ritik</td>
                        <td>patidar</td>
                        <td>23</td>
                        <td>hritikpatidar@gmail.com</td>
                        <td>asdf@123</td>
                    </tr>
                </tbody>
            </table>
            <button type="submit" className="btn btn-primary" onClick={ ()=>{Navigate('/form')} }>Add More Data</button>
        </> 

    )
}

export default Table
