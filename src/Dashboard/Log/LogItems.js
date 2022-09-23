import React from 'react';
import { FaRegEdit } from 'react-icons/fa'
import LogDeleteModal from './LogDeleteModal';

const LogItems = ({log}) => {

    return (
        <div>
            <h1 className=' font-bold text-primary border-primary border w-fit px-5 py-1'>{log?.type}</h1>
            <div className="bg-accent package_card px-4 py-3 border flex w-full justify-between ">
                <div>
                    <h1 className='text-xl'><span className='font-bold'> {log?.title} Days</span></h1>
                    <div >
                        <h1 className='text-justify'>{log?.description}</h1>
                    </div>
                </div>

                <div>
                    <div className='p-2 cursor-pointer bg-warning rounded-full text-white text-xl flex items-center justify-center'>
                        <FaRegEdit />
                    </div>
                    <LogDeleteModal 
                    log={log}/>
                </div>
            </div>
        </div>
    );
};

export default LogItems;