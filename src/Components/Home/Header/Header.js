
import React from 'react';
import { BsBell, BsCart3 } from 'react-icons/bs';
import { HiOutlineUser } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='relative'>
            <div className='z-50 shadow-sm '>
                <div className=' bg-[#0E1329] lg:pr-10 md:pr-4'>
                    <div className=" hidden md:block mid-container">
                        <div className="flex justify-end items-center text-white h-12">

                            <Link to="https://www.facebook.com/ayon.jodder.75/"><BsBell className='ml-8 text-xl'></BsBell></Link>
                            <Link to="https://github.com/AyonJD"><BsCart3 className='ml-8 text-xl'></BsCart3></Link>
                            <Link to="https://github.com/AyonJD"><HiOutlineUser className='ml-8 text-xl'></HiOutlineUser></Link>

                        </div>
                    </div>
                </div>

                <div className='mid-container z-30'>
                    <Navbar />
                </div>

                <div className="banner -mt-[88px] z-0 w-full flex items-center justify-center flex-col">
                    <h1 className='lg:text-5xl uppercase md:text-4xl text-3xl font-extrabold text-white text-center'>
                        Every step is progress <br />
                        Start Today
                    </h1>
                    <div className="button_section mt-8">
                        <Link to="/join-us" className="btn btn-primary lg:w-[150px] md:w-[140px] lg:h-[50px] md:h-[45px] join_gym_button lg:text-lg font-bold ">JOIN GYM</Link>
                        <Link to="/packages" className="btn btn-outline ml-4 btn-primary lg:w-[150px] md:w-[140px] lg:h-[50px] md:h-[45px] lg:text-lg font-bold text-white">PACKAGE</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;





