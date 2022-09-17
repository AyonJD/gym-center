import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import img from '../../../assets/Image/profile/WhatsApp Image 2022-08-29 at 11.31.14 PM.jpeg'
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import { BsPencilSquare } from 'react-icons/bs'
import Popup from 'reactjs-popup';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UsersProfile = () => {
    const { token } = AuthUser()
    const [userPackage, setUserPackage] = useState([])
    const [handleEditButton, setHandleEditButton] = useState(false)
    const { register, handleSubmit, watch, formState: { errors }, reset, trigger } = useForm();
    const [openModal, setOpenModal] = useState(false)

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
    const [userData, setUserData] = useState([])
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

    console.log(userData)

    // image patch on server
    const handleImageEdit = (data) => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('profile_image', image)
        axios.patch(`https://gym-management97.herokuapp.com/api/update_profile`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res)
            }).then(data => [
                console.log(data)
            ])
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className=''>
            <div className="shadow-md w-full">

                <h2 className='text-2xl p-5 font-semibold'>Hello, User!</h2>
            </div>
            <div className=" p-5 mt-4">

                <div className=''>
                    <div className=''>
                        <div className='w-36 mx-auto relative '>
                            {
                                userData?.data?.profile_image ? <img
                                    onMouseEnter={() => setHandleEditButton(true)}
                                    onMouseLeave={() => setHandleEditButton(false)}
                                    className='rounded' src={userData?.data?.profile_image} alt="" /> : <img
                                    onMouseEnter={() => setHandleEditButton(true)}
                                    onMouseLeave={() => setHandleEditButton(false)}
                                    className='rounded' src='https://i.ibb.co/vHfKc6X/blank-profile-picture-g3bbbf5065-1280.png' alt="" />
                            }
                            {
                                handleEditButton && <label className='absolute bottom-0 right-0' htmlFor="my-modal-3">
                                    <BsPencilSquare
                                        onClick={()=>setOpenModal(false)}
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
                                        <form onSubmit={handleSubmit(handleImageEdit)}>
                                            <input
                                                type="file" name='image' className=' input-bordered w-full focus:outline-none mt-5'
                                                {...register("image", {
                                                    required: 'Image is required',

                                                })}
                                                onKeyUp={(e) => {
                                                    trigger('image')
                                                }}
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

                <div >
                    <div className='md:w-2/3 mx-auto border-dashed border-b-2 pb-10'>
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