import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthUser from '../../hooks/AuthUser/AuthUser';

const LogDetails = () => {
    const { id } = useParams();
    const { token, userRole } = AuthUser()
    const [singleLog, setSingleLog] = useState({})

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[month];
    const date = `${day} ${monthName} ${year}`;

    //axios get request by id
    axios.get(`http://crossfitassemble.xyz/api/console/${id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            // console.log(res);
            setSingleLog(res.data)
        })
        .catch(err => {
            console.log(err)
        })

    return (
        <div className="">
            <div className='flex justify-between p-3 pb-6 border-b'>
                <h2 className='text-2xl font-semibold'>Hello, {userRole}!</h2>
                <div className='flex items-center gap-3'>
                    <p className='text-sm font-bold text-secondary'>{date}</p>
                </div>
            </div>



            <div className="w-[95vw] lg:w-1/2 mx-auto my-10">
                <h1 className=' font-bold text-primary border-primary border w-fit px-5 py-1 border-b-0'>{singleLog?.type}</h1>
                <div className="bg-accent package_card px-4 py-3 border flex w-full justify-between ">
                    <div>

                        <div >
                            <div className="">
                                <img className='w-1/5' src={singleLog?.image} alt="" />
                            </div>
                            <h1 className='text-xl'><span className='font-bold'> {singleLog?.title}</span></h1>
                            <h1 className='text-justify'>{singleLog?.description}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogDetails;