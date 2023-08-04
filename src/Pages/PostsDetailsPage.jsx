import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';


const PostsDetailsPage = () => {
    const post = useLoaderData();
    console.log(post)
    const { title, cover, createdAt, description } = post
    console.log(createdAt)
    const timestamp = createdAt;
    const date = new Date(timestamp);
    const formattedDate = format(date, "ha dd MMM, yyyy", { locale: enUS });

    // const handlePost = (event) => {
    //     event.preventDefault()
    //     const form = event.target;
    //     // const title = form.title.value
    //     // const description = form.description.value
    //     // console.log(title,description)
    //     console.log(form);
    // }

    return (
        <div className='py-14 bg-primary text-white text-opacity-80 min-h-screen'>
            <div className='flex items-center justify-between px-5'>
                <Link to='/posts'> <p className='flex px-5 items-center gap-2 text-lg'><FaArrowLeft /> All post</p></Link>

                <div className=''>
                    <button onClick={() => window.my_modal_5.showModal()} className='btn btn-active flex items-center gap-2'>Create New Post <FaPlus /></button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <form  method="dialog" className="modal-box bg-slate-600 ">
                            <h3 className="font-bold text-lg text-center mb-5">Create New Post!</h3>
                            <div className='form-control text-black'>
                                <input className='p-3 rounded-xl' type="text" placeholder='post title' name="title" id="" />
                            </div>
                            <div className='form-control mt-5 text-black'>
                                <textarea className='p-3 rounded-lg' placeholder='post description' name="description" id="" cols="10" rows="10"></textarea>
                            </div>
                            <div>
                                <input className='mt-5' type="submit" value="Submit" />
                            </div>

                            <div className="modal-action">

                                <button className="btn">Close</button>
                            </div>
                        </form>
                    </dialog>
                </div>
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
