import React, { useEffect, useState } from 'react';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import toast from 'react-hot-toast';
import { set } from 'react-hook-form';
import Loading from '../../../hooks/Loading/Loading';

const UsersWorkout = () => {
    const { token } = AuthUser();
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[month];
    const date = `${day} ${monthName} ${year}`;

    const [purchedPackages, setPurchedPackages] = useState([]);
    const [showSchedule, setShowSchedule] = useState(false);
    const [packageSchedule, setPackageSchedule] = useState(null);
    const [packageId, setPackageId] = useState(6);
    const [packageLoading, setPackageLoading] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {

        fetch(`https://gym-management97.herokuapp.com/api/shedule?package=${packageId}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setPackageSchedule(data)

            })
    }, [packageId, token, packageSchedule])

    useEffect(() => {
        setPackageLoading(true);
        fetch('https://gym-management97.herokuapp.com/api/user_package', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setPurchedPackages(data);
                setPackageLoading(false);
            })
    }, [token, packageSchedule])

    const handlePackageClick = (id) => {
        setShowSchedule(false)
        setPackageId(id)
        setLoading(true);
        fetch(`https://gym-management97.herokuapp.com/api/shedule?package=${id}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setPackageSchedule(data)
                setShowSchedule(true)
                setLoading(false)
            })
    }

    // get is_active value from package schedule data
    const isActive = packageSchedule?.data?.filter(active => {
        if (active?.is_active === 1) {
            return active
        }
    })



    const handleConfirm = (schedule_id, package_id) => {
        // console.log(schedule_id, package_id)
        fetch(`https://gym-management97.herokuapp.com/api/confirm_shedule`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                shedule: schedule_id,
                package: package_id
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data, 'data')
                if (data.success) {
                    console.log(data, 'success')
                    toast.success('Schedule confirmed successfully')
                } else if (!data.success && data.error === "The fields user_id, shedule_id must make a unique set.") {
                    toast.error('You have already booked this schedule')
                } else if (!data.success) {
                    toast.error('Something went wrong')
                } else {
                    toast.success('Schedule confirmed')
                }
            })
    }

    // const assignedPackages = purchedPackages?.data?.filter(assigned => {
    //     if (assigned?.status === 'assigned') {
    //         return assigned

    //     }
    // })

    // console.log(purchedPackages, 'purchedPackages');

    const tConvert = time => {
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) {
            time = time.slice(1);
            time[5] = +time[0] < 12 ? 'AM' : 'PM';
            time[0] = +time[0] % 12 || 12;
        }
        return time.join('');
    }



    // console.log(tConvert('01:00:00'), 'time');

    return (
        <div className="grid mt-16 grid-cols-1 lg:grid-cols-2">
            <div className="border-r px-5">
                <div className="flex items-center lg:justify-between border-b pb-5">
                    <h1 className='text-xl font-bold'>Programs</h1>
                </div>

                {/* Packages part */}
                <div className='mt-10'>
                    {
                        purchedPackages?.data?.map((pack, index) => {
                            return (
                                <div className='my-8' key={index}>
                                    <h1 className='texxt-xl font-bold text-primary border-primary border w-fit px-5 py-1'>{pack?.package_type?.package_title}</h1>
                                    <div
                                        onClick={() => { handlePackageClick(pack.id) }}
                                        className="bg-primary package_card text-white  px-4 py-2">
                                        <h1 className='text-xl'>Total Time: <span className='font-bold'>{pack?.duration_days} Days</span></h1>
                                        <div className="flex items-center w-full justify-between">
                                            <div>
                                                <h1>Total Class: {pack?.total_class}</h1>
                                                <h1>Total Consultation: {pack?.total_consultation}</h1>
                                            </div>

                                            <div>
                                                <h1>Class left: {pack?.class_left}</h1>
                                                <h1>Consultation left: {pack?.total_consultation}</h1>
                                            </div>
                                            <BsFillArrowRightCircleFill className='h-8 cursor-pointer w-8' />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            <div className="px-5 border-r">
                <div className="flex items-center lg:justify-between border-b pb-5">
                    <h1 className='text-xl font-bold'>Schedule</h1>
                </div>
                {
                    loading ? <Loading /> :
                        <>
                            {
                                showSchedule && packageSchedule?.data?.map((pack, index) => {
                                    return (
                                        <div className='my-8' key={index}>
                                            <div

                                                className="bg-white border-2 border-[#3D3270] student_card text-black flex items-center justify-between px-4 py-2">
                                                <div className="flex items-center gap-5">
                                                    <div>
                                                        <h1 className='text-[#3D3270] font-extrabold text-xl'>
                                                            {pack?.day}
                                                        </h1>

                                                        <h1 className='text-[#3D3270] font-extrabold text-sm'>{tConvert(pack?.from_time)} - {tConvert(pack?.to_time)}</h1>
                                                    </div>

                                                </div>
                                                <div>
                                                    {
                                                        isActive?.length >= 1 ?
                                                            <button
                                                                disabled
                                                                onClick={() => { handleConfirm(pack.id, packageId) }}
                                                                className="btn btn-primary btn-xs disabled">Confirm</button> : <button
                                                                    onClick={() => { handleConfirm(pack.id, packageId) }}
                                                                    className="btn btn-primary btn-xs disabled">Confirm</button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>
                }
            </div>
        </div>
    );
};

export default UsersWorkout;