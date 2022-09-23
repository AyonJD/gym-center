import React, { useEffect, useState } from 'react';
import AuthUser from '../../hooks/AuthUser/AuthUser';
import Loading from '../../hooks/Loading/Loading';

import { MdOutlinePostAdd } from 'react-icons/md'
import toast from 'react-hot-toast';

import LogItems from './LogItems';

const Log = () => {
    const { token, userRole } = AuthUser()
    const [logData, setLogData] = useState([])
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[month];
    const date = `${day} ${monthName} ${year}`;

    useEffect(() => {
        fetch(`http://crossfitassemble.xyz/api/console`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setLogData(data)
            }
            )
    }, [token])



    return (
        <div className='max-h-fit'>
            <div className='flex justify-between p-3 pb-6 border-b'>
                <h2 className='text-2xl font-semibold'>Hello, {userRole}!</h2>
                <div className='flex items-center gap-3'>
                    <p className='text-sm font-bold text-secondary'>{date}</p>
                </div>
            </div>
            <div className='w-[60%]  mx-auto'>
                <div className='flex justify-end cursor-pointer'>
                    <div className=' mr-2 mt-10 bg-primary rounded py-2 px-4 text-white flex items-center gap-2'>
                        <h2 className='font-bold '>Post</h2> <MdOutlinePostAdd className='text-xl' />
                    </div>
                </div>
                <div className='grid gap-7'>
                    {
                        logData?.data?.map(log => <LogItems
                            key={log?.id}
                            log={log}
                        ></LogItems>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Log;