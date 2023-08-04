import React from 'react';
import { Link } from 'react-router-dom';

const PostRow = ({ post, sl }) => {
    const { id, title, cover } = post;
    return (
        <>
            <tr className='hover:bg-slate-900 text-lg font-serif'>
                <th>{sl}</th>
                <td className='hover:underline'><Link to={`${post.id}`}>{title}</Link></td>
                <td><img src={cover} className='w-24 h-16 rounded-md' alt="" /></td>
            </tr>
        </>
    );
};

export default PostRow;
