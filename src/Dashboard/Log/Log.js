import React from 'react';
import { useQuery } from 'react-query';
import AuthUser from '../../hooks/AuthUser/AuthUser';
import Loading from '../../hooks/Loading/Loading';
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin2Line } from 'react-icons/ri'

const Log = () => {
    const { token } = AuthUser()

    const { data: logData, isLoading, refetch } = useQuery('users', () =>
        fetch(`http://crossfitassemble.xyz/api/console`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }
    console.log(logData.data)

    return (
        <div>
            {
                logData.data.map(log => (
                    <div className='my-8 w-[50%] mx-auto'>
                        <h1 className=' font-bold text-primary border-primary border w-fit px-5 py-1'>{log?.type}</h1>
                        <div
                            className="bg-accent package_card px-4 py-3 border flex items-center w-full justify-between ">
                            <div>
                                <h1 className='text-xl'><span className='font-bold'> {log?.title} Days</span></h1>
                                <div className="">
                                    <div>
                                        <h1>Total Class: {log?.total_class}</h1>
                                        <h1>Total Consultation: {log?.total_consultation}</h1>
                                    </div>

                                </div>
                            </div>

                            <div className='grid gap-5'>
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
    );
};

export default Log;