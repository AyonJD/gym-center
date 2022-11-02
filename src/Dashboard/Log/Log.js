import React, { useEffect, useState } from 'react';
import AuthUser from '../../hooks/AuthUser/AuthUser';
import Loading from '../../hooks/Loading/Loading';

import { MdOutlinePostAdd } from 'react-icons/md'
import toast from 'react-hot-toast';

import LogItems from './LogItems';
import LogPostModal from './LogPostModal';

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
    const [handleBtn, setHandleBtn] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [allData, setAllData] = useState(true)
    const [analysisData, setAnalysisData] = useState(false)
    const [regularData, setRegularData] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`http://crossfitassemble.xyz/api/console`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setLogData(data);
                setLoading(false)
            }
            )
    }, [token])

    // console.log(allData, 'allData');

    //filter data
    // const filterAnalysisData = logData?.data?.filter(data => data.type === 'analysis log')
    // const filterRegularData = logData?.data?.filter(data => data.type === 'regular log')
    // console.log(filterRegularData);

    return (
        <div className='max-h-fit pb-10'>
            <div className='flex justify-between p-3 pb-6 border-b'>
                <h2 className='text-2xl font-semibold'>Hello, {userRole}!</h2>
                <div className='flex items-center gap-3'>
                    <p className='text-sm font-bold text-secondary'>{date}</p>
                </div>
            </div>
            <div className=' w-[95vw] mt-2 mx-auto'>
                {/* <div className='sm:flex justify-between my-4 mt-10 items-center'>
                    <div>
                        <button className='btn btn-sm btn-primary'
                            onClick={() => {
                                setAllData(true)
                                setAnalysisData(false)
                                setRegularData(false)
                            }}
                        >All</button>
                        <button className='btn btn-sm btn-primary mx-4'
                            onClick={() => {
                                setAllData(false)
                                setAnalysisData(true)
                                setRegularData(false)
                            }}
                        >Analysis</button>
                        <button className='btn btn-sm btn-primary'
                            onClick={() => {
                                setAllData(false)
                                setAnalysisData(false)
                                setRegularData(true)
                            }}
                        >Regular</button>
                    </div>
                    <div className='flex sm:mt-0 mt-5 sm:justify-center'>
                        <label onClick={() => setHandleBtn(true)} htmlFor="my-modal-3">
                            <div className='cursor-pointer mr-2 bg-primary rounded py-2 px-4 text-white flex items-center gap-2'>

                                <h2 className='font-bold '>Post</h2> <MdOutlinePostAdd className='text-xl' />

                            </div>
                        </label>
                    </div>
                    {
                        (handleBtn && !openModal) && <LogPostModal setOpenModal={setOpenModal} />
                    }
                </div> */}
                {
                    loading ? <Loading /> :
                        <>
                            <div className="schedule lg:mb-20 md:mb-16 sm:mb-10 mb-10 md:flex items-center">
                                <div className="schedule_time w-full">
                                    <div className="overflow-x-auto">
                                        <table className="table table-zebra table_border table-compact w-full">
                                            <thead className='table_border rounded-2xl'>
                                                <tr >
                                                    <th>Title</th>
                                                    <th>Type</th>
                                                    <th>Description</th>
                                                    <th>Date</th>
                                                    <th>Day</th>
                                                    <th>Training</th>
                                                    <th>Sleep</th>
                                                    <th>Supliment</th>
                                                    <th>Food</th>
                                                    <th>Support</th>
                                                    <th>Eat out</th>
                                                    <th>Coffee</th>
                                                    <th>Others</th>
                                                    <th>Image</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                logData?.data?.map(log => <LogItems
                                                    key={log?.id}
                                                    log={log}
                                                    setOpenModal={setOpenModal}
                                                ></LogItems>)
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='grid gap-7'>
                                {
                                    allData && (
                                        <>
                                            
                                        </>
                                    )
                                }

                                {
                                    analysisData && (
                                        <>
                                            {
                                                filterAnalysisData?.map(log => <LogItems
                                                    key={log?.id}
                                                    log={log}
                                                    setOpenModal={setOpenModal}
                                                ></LogItems>)
                                            }
                                        </>
                                    )
                                }

                                {
                                    regularData && (
                                        <>
                                            {
                                                filterRegularData?.map(log => <LogItems
                                                    key={log?.id}
                                                    log={log}
                                                    setOpenModal={setOpenModal}
                                                ></LogItems>)
                                            }
                                        </>
                                    )
                                }
                            </div> */}
                        </>
                }
            </div>

        </div>
    );
};

export default Log;