import React from 'react';
import Modal from "react-modal";
import { useForm } from 'react-hook-form';
import { BsPlusLg } from 'react-icons/bs';
import AuthUser from '../../../hooks/AuthUser/AuthUser';

Modal.setAppElement("#root");

export default function ExpenseModal({ refetch }) {
    const { register, formState: { errors }, handleSubmit, trigger, reset } = useForm();
    const { token } = AuthUser()

    const onSubmitForm = (data) => {
        const expense = {
            amount: data.amount,
            expense_date: data.expense_date,
            // image: data.image,
            name: data.name,
            message: data.message,
            // make unique id
            id: Math.random().toString(36).substr(2, 9)
        }
        // console.log(expense)
        // post data to database 
        fetch(`https://gym-management97.herokuapp.com/api/expense/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(expense)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
                reset()
            }).catch(err => console.log(err))
    }

    return (

        <div className='mt-10'>
            <label htmlFor="my-modal-5" className='cursor-pointer absolute right-5 top-2'>
                <div className='bg-primary shadow-xl text-white p-2 rounded cursor-pointer  '>
                    <BsPlusLg className=' font-extrabold' />
                </div>
            </label>

            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <label htmlFor="my-modal-5" className="modal">
                <label className="modal-box lg:w-[60%] relative" htmlFor="">
                    <form onSubmit={handleSubmit(onSubmitForm)} id="my-modal-5">
                        <label htmlFor="my-modal-5" className="btn btn-sm text-white btn-error btn-circle absolute right-2 top-2">✕</label>
                        <div className=" mt-3">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Source Name</span>
                                </label>
                                <input type="text" placeholder="Enter The Name of Expense Source" className="input input-bordered w-full focus:outline-none"
                                    {...register("name", {
                                        required: 'Name is required',
                                        minLength: {
                                            value: 3,
                                            message: 'Name must be at least 3 characters'
                                        }
                                    })}
                                    onKeyUp={(e) => {
                                        trigger('name');
                                    }} />
                                <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.name?.message}</small>
                            </div>
                        </div>
                        <div className=" mt-3 ">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Amount</span>
                                </label>
                                <input type="number" placeholder="Enter The Amount of Expense" className="input input-bordered w-full focus:outline-none"
                                    {...register("amount", {
                                        required: 'Amount is required',
                                    })}
                                    onKeyUp={(e) => {
                                        trigger('amount');
                                    }}
                                />
                                <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.amount?.message}</small>
                            </div>
                        </div>
                        <div className=" mt-3">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Expense Date</span>
                                </label>
                                <input type="date" className="input input-bordered w-full focus:outline-none"
                                    {...register("expense_date", {
                                        required: 'Date is required',
                                    })}
                                    onKeyUp={(e) => {
                                        trigger('expense_date');
                                    }}
                                />
                                <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.expense_date?.message}</small>
                            </div>
                        </div>

                        <div className=" mt-3">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <input placeholder="Enter your Message" type="text" className="input input-bordered w-full focus:outline-none"
                                    {...register("message", {
                                        required: 'Message is required',
                                    })}
                                    onKeyUp={(e) => {
                                        trigger('message');
                                    }}
                                />
                                <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.message?.message}</small>
                            </div>
                        </div>

                        <div className="flex gap-2 mt-12 relative">
                            <div>
                                <label htmlFor="my-modal-5" className="btn btn-error text-white font-bold btn-sm">Close</label>
                            </div>
                            <div className="text-end">
                                <button
                                    type='submit'
                                    className="btn  bg-green-500 text-white font-bold px-3 py-1 rounded-md cursor-pointer btn-sm">Submit</button>
                            </div>
                        </div>
                    </form>
                </label>
            </label>
        </div>
    );
};