import React from 'react';
import { Link } from 'react-router-dom';

const UsersRow = ({ user, sl }) => {
    return (
        <>
            <tr className='hover:bg-slate-900 text-lg font-serif'>
                <th>{sl}</th>
                <td className='hover:underline'><Link to={`${user.id}`}>{user.name}</Link></td>
                <td>{user.email}</td>
                <td><img src={user.avatar} className='w-16 h-16 rounded-full' alt="" /></td>
            </tr>
        </>



    );
};

export default UsersRow;