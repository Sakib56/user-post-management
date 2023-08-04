import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import Swal from 'sweetalert2';


const PostsDetailsPage = () => {
    const post = useLoaderData();
    console.log(post)
    const { title, cover, createdAt, description } = post
    console.log(createdAt)
    const timestamp = createdAt;
    const date = new Date(timestamp);
    const formattedDate = format(date, "ha dd MMM, yyyy", { locale: enUS });

    

    return (
        <div className='py-14 bg-primary text-white text-opacity-80 min-h-screen'>
            <div className='flex items-center justify-between px-5'>
                <Link to='/posts'> <p className='flex px-5 items-center gap-2 text-lg'><FaArrowLeft /> All post</p></Link>
               <Link to='/createNewPost'> <button className='btn btn-active flex items-center gap-2'>Create New Post <FaPlus /></button></Link>

            </div>
            <h1 className='text-3xl text-center my-10 font-bold w-3/4 mx-auto'>{title} <span className='text-base'>( {formattedDate} )</span> </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center px-10 gap-5'>
                <div className=''>
                    <p className='text-lg mt-5'>{description}</p>
                </div>
                <div>
                    <img className='w-[550px] rounded-xl mx-auto' src={cover} alt="" />
                </div>
            </div>
        </div>
    );
   
};

export default PostsDetailsPage;
