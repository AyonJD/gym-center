import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import img from '../../../assets/Image/profile/WhatsApp Image 2022-08-29 at 11.31.14 PM.jpeg'
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import { BsPencilSquare } from 'react-icons/bs'
import Popup from 'reactjs-popup';
import { useForm } from 'react-hook-form';

const UsersProfile = () => {
    const { token } = AuthUser()
    const [userPackage, setUserPackage] = useState([])
    const [handleEditButton, setHandleEditButton] = useState(false)
    const { register, handleSubmit, watch, formState: { errors }, reset, trigger } = useForm();



    useEffect(() => {
        fetch(`https://gym-management97.herokuapp.com/api/user_package_order`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUserPackage(data)
            }
            )
    }, [])

    const handleImageEdit = data => {
        console.log(data.image[0]);
        fetch(`https://gym-management97.herokuapp.com/api/update_profile`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ profile_image: data.image[0] })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            }).catch(err => console.log(err))
    }
    return (
        <div className=''>
            <div className="shadow-md w-full">

                <h2 className='text-2xl p-5 font-semibold'>Hello, User!</h2>
            </div>
            <div className="flex gap-10 p-5 mt-4">


                <div className='mt-8 w-[40%]'>
                    <div className=''>
                        <div className='w-40 mx-auto relative'>
                            <img
                                onMouseEnter={() => setHandleEditButton(true)}
                                onMouseLeave={() => setHandleEditButton(false)}
                                className='rounded' src={img} alt="" />
                            {
                                handleEditButton && <label className='absolute bottom-0 right-0' htmlFor="my-modal-3">
                                    <BsPencilSquare
                                        onMouseEnter={() => setHandleEditButton(true)}
                                        onMouseLeave={() => setHandleEditButton(false)}
                                        htmlFor="my-modal-3"
                                        className='z-50 cursor-pointer text-white h-8 w-8 ' />
                                </label>
                            }
                        </div>
                        {
                            <>
                                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box relative">
                                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 className="text-lg font-bold">Select image from your device</h3>
                                        <form onSubmit={handleSubmit(handleImageEdit)}>
                                            <input type="file" name='image' className=' input-bordered w-full focus:outline-none mt-5'
                                                {...register("image", {
                                                    required: 'Image is required',

                                                })}
                                                onKeyUp={(e) => {
                                                    trigger('image')
                                                }}
                                            />
                                            <small className='text-[#FF4B2B] block text-xs ml-2 font-medium my-2'>{errors?.image?.message}</small>

                                            <input type="submit" className='btn btn-primary btn-sm mt-3' value="Upload" />
                                        </form>
                                    </div>
                                </div>
                            </>
                        }

                        <div className='text-center'>
                            <h2 className='text-sm font-semibold mt-5'>First & Last Name</h2>
                            <h2 className='text-sm font-semibold mt-2 text-primary'>User</h2>
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div>
                            <h1 className='text-xl font-bold mb-3 text-warning'>Workout Plan:</h1>
                            <div className='grid sm:grid-cols-3 gap-3'>
                                <button className='btn btn-primary btn-sm font-bold ' >CrossFit</button>
                                <button className='btn btn-accent btn-sm font-bold ' >Yoga</button>
                                <button className='btn btn-accent btn-sm font-bold' >Freehand</button>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-lg font-bold mb-3 text-[#595085]'>Subscriber Plan:</h1>
                            <button className='btn btn-primary btn-sm font-bold mr-3 mb-3' >Monthly</button>
                            <button className='btn btn-accent btn-sm font-bold mr-3' >12 Days left</button>
                        </div>
                    </div>

                </div>

                <div className='mt-5 w-[60%]'>
                    <div className='w-2/3 mx-auto border-dashed border-b-2 pb-10'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full focus:outline-none shadow" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" placeholder="Type here" className="input input-bordered w-full focus:outline-none shadow" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Phone</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full focus:outline-none shadow" />
                        </div>
                        <button className='btn btn-primary btn-sm px-4 mt-10 mb-32' type="submit">Update Profile</button>
                        {/* <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Text Level 01</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full focus:outline-none shadow" />
                    </div> */}
                    </div>

                    {/* <div className='grid grid-cols-2 gap-5 pt-8 pb-5'>
                    <h1>Information Section 02</h1>
                    <h1>Information Section 02</h1>
                </div> */}

                    {/* <div className='grid grid-cols-2 gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Text Level 01</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full focus:outline-none shadow" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Text Level 01</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full focus:outline-none shadow" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Text Level 01</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full focus:outline-none shadow" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Text Level 01</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full focus:outline-none shadow" />
                    </div>
                </div> */}


                </div>
            </div>
        </div >
    );
};

export default UsersProfile;