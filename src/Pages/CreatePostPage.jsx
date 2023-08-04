import React from 'react';
import Swal from 'sweetalert2';

const CreatePostPage = () => {
    const handlePost = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        fetch('https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ title, description })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Swal.fire({
                title: 'success!',
                text: 'Data Inserted Successfully!',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            form.reset()
        })
    }
    return (
        <div className='min-h-screen bg-slate-700 text-white'>
            <h1 className='text-center font-bold text-2xl py-10'>Create New Post</h1>
            <form onSubmit={handlePost} className='w-1/2 mx-auto '>
                <div className='form-control'>
                    <label>
                        <h1 className='text-lg'>Post Title</h1>
                    </label>
                    <input className='w-full mt-2 p-3 rounded-lg text-black' type="text" placeholder='title' name="title" id="" />
                </div>
                <div className='form-control mt-5'>
                    <label>
                        <h1 className='text-lg'>Post Description</h1>
                    </label>
                    <textarea className='rounded-lg text-black p-3 h-44' name="description" placeholder='description' id="" cols="10" rows="10"></textarea>
                </div>
                <div className='text-center'>
                    <input className='btn btn-info mt-5' type="submit" value="Add Post" />
                </div>
            </form>
        </div>
    );
};

export default CreatePostPage;