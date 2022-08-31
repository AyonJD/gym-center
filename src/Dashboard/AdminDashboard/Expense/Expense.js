import React, { useState } from 'react';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import ControlledPopup from '../../Modal/ControlledPopup';
import AddExpenseModal from './AddExpenseModal';


const Expense = () => {
    const getUser = AuthUser();
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[month];
    const date = `${day} ${monthName} ${year}`;

    const [selectedDate, setSelectedDate] = useState(date);

    return (
        <div className='p-5 mt-4'>
            <div className='flex justify-between'>
                <h2 className='md:text-2xl text-xl font-semibold'>Hello, Manager</h2>
                <div className='flex items-center gap-3'>
                    <p className='text-sm  font-bold text-secondary'>{date}</p>
                </div>
            </div>
            <h1 className='text-center md:text-2xl text-xl font-bold mt-4 md:mb-2 mb-5'>Expense History</h1>

            <div className='md:flex justify-between items-center'>
                <div className="date_field flex md:w-[40%] w-full items-center mb-5 md:mb-0">
                    <p className='text-sm mr-5 font-bold w-fit text-secondary'>{selectedDate}</p>
                    <input onChange={(e) => setSelectedDate(e.target.value)} className='input w-[50%] input-bordered input-md' type="date" />
                </div>
                <div className="data_field flex md:w-[60%] w-full md:justify-end">
                    <button className='btn btn-sm btn-primary rounded-md mr-2'>All</button>
                    <button className='btn btn-sm btn-primary rounded-md mr-2'>Assets</button>
                    <button className='btn btn-sm btn-primary rounded-md'>Petty Cash</button>
                </div>
            </div>

            <AddExpenseModal />
        </div>
    );
};

export default Expense;