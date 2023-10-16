import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../src/Tasks/Task4_styles.css"

function Task4() {
    const [dummyData, setDummyData] = useState([]);
    const [isError, setError] = useState("");

    useEffect(() => {
        axios.get("https://dummyjson.com/users")
            .then((response) => setDummyData(response.data.users))
            .catch((error) => setError(error.message));
    }, []);

    return (
        <div className='bg-dark'>
            <h1 className='text-light mb-3'> Dummy Data </h1>

            {isError === '' && dummyData.length > 0 ? (
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th scope='col'>Sno</th>
                            <th scope='col'>Profile Pic</th>
                            <th scope='col'>First Name</th>
                            <th scope='col'>Last Name</th>
                            <th scope='col'>Gender</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Domain</th>
                            <th scope='col'>IP</th>
                            <th scope='col'>University</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyData.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td><img src={user.image} alt='profile pic' /></td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.gender}</td>
                                <td>{user.email}</td>
                                <td>{user.domain}</td>
                                <td>{user.ip}</td>
                                <td>{user.university}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (<p> {isError} </p>)
            }
        </div>
    );
}

export default Task4
