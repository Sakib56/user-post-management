import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft, FaBeer } from 'react-icons/fa';


const UsersDetailsPage = () => {
    const user = useLoaderData();
    console.log(user)
    const { name, email, avatar, about } = user

    return (
        <div className='py-14 bg-primary text-white text-opacity-80 min-h-screen'>
            <Link to='/users'> <p className='flex px-5 items-center gap-2 text-lg'><FaArrowLeft /> All User</p></Link>
            <h1 className='text-center font-bold text-3xl mb-10'>User Information</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center px-10 gap-5'>
                <div className=''>
                    <h1 className='text-3xl '>{name}</h1>
                    <h1>{email}</h1>
                    <p className='text-lg mt-5'>{about}</p>
                </div>
                <div>
                    <img className='w-96 rounded-xl mx-auto' src={avatar} alt="" />
                </div>
            </div>
        </div>
    );
};

export default UsersDetailsPage;