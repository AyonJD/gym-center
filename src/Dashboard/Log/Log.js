import React, { useEffect, useState } from 'react';
import AuthUser from '../../hooks/AuthUser/AuthUser';
import Loading from '../../hooks/Loading/Loading';
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin2Line } from 'react-icons/ri'
import { MdOutlinePostAdd } from 'react-icons/md'
import toast from 'react-hot-toast';

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

    const handleLogDelete = (id) => {
        console.log(id)
        fetch(`http://crossfitassemble.xyz/api/console/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Product deleted successfully')
                } else {
                    toast.error('Something went wrong')
                }
                console.log(data)
            })
    }

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
                            <>
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
                                            <label htmlFor="my-modal-5"><div className='p-2 cursor-pointer bg-error rounded-full text-white text-xl flex items-center justify-center'>
                                                <RiDeleteBin2Line />
                                            </div></label>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }

                </div>
            </div>
            {/* <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                        <label htmlFor="my-modal-5" className="modal cursor-pointer">
                            <label className="modal-box relative" for="">
                                <h3 className="text-lg font-bold text-center">Are you sure want to Delete?  </h3>
                                <div className='flex gap-3 mt-5 justify-center'>
                                    <div
                                        onClick={() => handleLogDelete(log?.id)}
                                        className='bg-success py-2 px-5 rounded font-bold text-white cursor-pointer' type="submit">Yes</div>

                                    <label htmlFor="my-modal-5">
                                        <div className='bg-error py-2 px-5 rounded font-bold text-white cursor-pointer' type="submit">No</div>
                                    </label>
                                </div>
                            </label>
                        </label> */}
        </>
    );
};

export default Log;