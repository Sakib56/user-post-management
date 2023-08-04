import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import PostRow from '../Components/PostRow';


const PostsPage = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/posts')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setPosts(data)
            })
    }, [])

    // console.log(posts)
    return (
        <div className="overflow-x-auto bg-primary py-10 text-white text-opacity-80 min-h-screen px-5">
            <h1 className=' text-center mx-auto text-xl md:text-2xl font-serif font-bold mb-5 md:mb-10'>ALL Posts</h1>
            {
                loading ? <> <div className='text-center mt-10 overflow-hidden'><ClipLoader
                    color="#36d7b7"
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> </div></> :
                    <table className="table">
                     
                        <thead>
                            <tr className='text-lg md:text-xl text-white text-opacity-80 font-serif'>
                                <th>Sl</th>
                                <th>Post Title</th>
                                <th>Cover Photo</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                posts?.map((post, index) => <PostRow key={post.id} post={post} sl={index + 1}></PostRow>)
                            }


                        </tbody>
                    </table>
            }


        </div>
    );
};

export default PostsPage;
