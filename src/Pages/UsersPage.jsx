
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';


const UsersPage = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/users')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setUsers(data)
            })
    }, [])

    console.log(users)
    return (
        <div className="overflow-x-auto bg-primary py-10 text-white text-opacity-80 min-h-screen px-5">
            <h1 className=' text-center mx-auto text-2xl font-serif font-bold mb-10'>ALL Users</h1>
            {
                loading ? <> <div className='text-center mt-10 overflow-hidden'><ClipLoader
                    color="#36d7b7"
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> </div></> :
                    <table className="table">

                        <thead>
                            <tr className='text-xl text-white text-opacity-80 font-serif'>
                                <th>Sl</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Photo</th>
                            </tr>
                        </thead>
                        <tbody>


                        </tbody>
                    </table>
            }


        </div>
    );
};

export default UsersPage;


