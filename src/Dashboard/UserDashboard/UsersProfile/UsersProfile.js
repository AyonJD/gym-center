import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import img from '../../../assets/Image/profile/WhatsApp Image 2022-08-29 at 11.31.14 PM.jpeg'
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import { BsPencilSquare } from 'react-icons/bs'
import Popup from 'reactjs-popup';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const UsersProfile = () => {
    const { token, userRole } = AuthUser()
    const [userPackage, setUserPackage] = useState([])
    const [handleEditButton, setHandleEditButton] = useState(false)
    const { register, handleSubmit, watch, formState: { errors }, reset, trigger } = useForm();
    const [openModal, setOpenModal] = useState(false)
    const [imageField, setImageField] = useState(null)
    const [userData, setUserData] = useState([])

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
    }, [token])

    // get user data

    useEffect(() => {
        fetch(`https://gym-management97.herokuapp.com/api/update_profile`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUserData(data)
                // console.log(data)
            }
            )
    }, [token, userData])

    // console.log(userData)

    // image patch on server
    const handleImageEdit = event => {
        event.preventDefault();
        const image = imageField;
        const formData = new FormData()
        formData.append('profile_image', image)
        axios.patch(`https://gym-management97.herokuapp.com/api/update_profile`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                // console.log(res)
            }).then(data => [
                // console.log(data)
            ])
            .catch(err => {
                // console.log(err)
            })
    }


    // patch user data on server
    const submitUserData = (data) => {
        const { name, email, phone } = data;
        const updatedUserData = {
            name: name || userData?.name,
            email: email || userData?.email,
            phone: phone || userData?.phone
        }
        // console.log(userData)
        fetch(`https://gym-management97.herokuapp.com/api/update_profile`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(updatedUserData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    reset()
                    toast.success('Profile Updated Successfully')
                } else {
                    toast.error('Phone number should be start with +880')
                }
                console.log(data)
            }
            )
    }


    return (
        <div className=''>
            <div className="shadow-md w-full">
                {
                    userRole === 'user' && <h2 className='text-2xl p-5 font-semibold'>Hello, User!</h2>
                }
                {
                    userRole === 'trainer' && <h2 className='text-2xl p-5 font-semibold'>Hello, Trainer!</h2>
                }
                {
                    userRole === 'accountant' && <h2 className='text-2xl p-5 font-semibold'>Hello, Accounts!</h2>
                }
            </div>
            <div className=" p-5 mt-4">

                <div className=''>
                    <div className=''>
                        <div className='w-36 h-40 mx-auto relative '>
                            {
                                userData?.data?.profile_image ? <img
                                    onMouseEnter={() => setHandleEditButton(true)}
                                    onMouseLeave={() => setHandleEditButton(false)}
                                    className='rounded w-full h-full' src={userData?.data?.profile_image} alt="" /> : <img
                                    onMouseEnter={() => setHandleEditButton(true)}
                                    onMouseLeave={() => setHandleEditButton(false)}
                                    className='rounded w-full ' src='https://i.ibb.co/vHfKc6X/blank-profile-picture-g3bbbf5065-1280.png' alt="" />
                            }
                            {
                                handleEditButton && <label className='absolute bottom-0 right-0' htmlFor="my-modal-3">
                                    <BsPencilSquare
                                        onClick={() => setOpenModal(false)}
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
                                <div className={`modal ${openModal && 'hidden'}`}>
                                    <div className='modal-box relative'>
                                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 className="text-lg font-bold">Select image from your device</h3>
                                        <form onSubmit={(event) => handleImageEdit(event)}>
                                            <input
                                                type="file" name='image' className=' input-bordered w-full focus:outline-none mt-5'
                                                onChange={e => { setImageField(e.target.files[0]) }}
                                            />
                                            <small className='text-[#FF4B2B] block text-xs ml-2 font-medium my-2'>{errors?.image?.message}</small>

                                            <input
                                                onClick={() => setOpenModal(true)}
                                                type="submit" className='btn btn-primary btn-sm mt-3' value="Upload" />
                                        </form>
                                    </div>
                                </div>
                            </>
                        }

                        <div className='text-center'>
                            <h1 className=' font-bold mt-3'>{userData?.data?.name}</h1>
                            <h2 className='text-sm  text-secondary'>User</h2>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit(submitUserData)}>
                    <div className='md:w-2/3 mx-auto border-dashed border-b-2 pb-10'>
                        <div className="flex  w-full mx-auto flex-col">
                            <label className='text-[#747474] text-sm font-medium ml-1 mb-2'>Name</label>
                            <input className='py-3 px-5 bg-[#F2F2F2] rounded-md focus:outline-0' type="name" name="name" id="" placeholder='Your Name'
                                {...register("name", {
                                    pattern: {
                                        value: 3,
                                        message: 'Name must be at least 3 characters'
                                    }
                                })}
                                onKeyUp={(e) => {
                                    trigger('name')
                                }}
                            />
                            <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.name?.message}</small>
                        </div>


                        <div className="flex  w-full mx-auto flex-col mt-5">
                            <label className='text-[#747474] text-sm font-medium ml-1 mb-2'>Email</label>
                            <input className='py-3 px-5 bg-[#F2F2F2] rounded-md focus:outline-0' type="email" name="email" id="" placeholder='Email or phone number'
                                {...register("email", {
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Please enter a valid Email"
                                    }
                                })}
                                onKeyUp={(e) => {
                                    trigger('email')
                                }}
                            />
                            <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.email?.message}</small>
                        </div>

                        <div className="flex  w-full mx-auto flex-col mt-5">
                            <label className='text-[#747474] text-sm font-medium ml-1 mb-2' >Phone</label>
                            <input className='py-3 rounded-md bg-[#F2F2F2] px-5 focus:outline-0' type="text" name="phone" id="" placeholder='Enter Phone Number'
                                {...register('phone', {
                                    minLength: {
                                        value: 11,
                                        message: 'Minimum 11 character required'
                                    }
                                })}
                                onKeyUp={() => {
                                    trigger('phone')
                                }}
                            />
                            <small className='text-[#FF4B2B] ml-2 text-xs font-medium my-2'>{errors?.phone?.message}</small>
                        </div>

                        <button
                            className='btn btn-primary btn-sm px-4 mt-10 mb-32' type="submit" > Submit</button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default UsersProfile;