import React, { useEffect, useState } from 'react';
import AuthUser from '../../hooks/AuthUser/AuthUser';
import Loading from '../../hooks/Loading/Loading';
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin2Line } from 'react-icons/ri'
import { MdOutlinePostAdd } from 'react-icons/md'

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

    // const { data: logData, isLoading, refetch } = useQuery('users', () =>
    //     fetch(`http://crossfitassemble.xyz/api/console`, {
    //         method: 'GET',
    //         headers: {
    //             'authorization': `Bearer ${token}`
    //         }
    //     }).then(res => res.json())
    // )
    // if (isLoading) {
    //     return <Loading />
    // }

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

    console.log(logData , userRole)



    return (
        <>
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
                <div className='cursor-pointer'>
                    {
                        logData?.data?.map(log => (
                            <div className='mb-7'>
                                <h1 className=' font-bold text-primary border-primary border w-fit px-5 py-1'>{log?.type}</h1>
                                <div className="bg-accent package_card px-4 py-3 border flex w-full justify-between ">
                                    <div>
                                        <h1 className='text-xl'><span className='font-bold'> {log?.title} Days</span></h1>
                                        <div >
                                            <h1 className='text-justify'>{log?.description}</h1>
                                        </div>
                                    </div>

                                    <div className='grid gap-3'>
                                        <div className='p-2 cursor-pointer bg-warning rounded-full text-white text-xl flex items-center justify-center'>
                                            <FaRegEdit />
                                        </div>
                                        <div className='p-2 cursor-pointer bg-error rounded-full text-white text-xl flex items-center justify-center'>
                                            <RiDeleteBin2Line />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Log;