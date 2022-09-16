import React from 'react';
import img1 from '../../../assets/Image/icon/icon-1.png';
import img2 from '../../../assets/Image/icon/icon-2.png';
import img3 from '../../../assets/Image/icon/icon-3.png';
import { BsFacebook } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";

const Contact = () => {
    return (
        <div className='mid-container'>
            <h1 className='md:text-4xl text-3xl font-bold text-primary mb-7'>Contact us</h1>
            <div className='mb-10 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-5'>

                <div className=" rounded-2xl shadow-md p-3">
                    <div className='flex justify-center'>
                        <img src={img1} alt="" />
                    </div>
                    <div className=' pb-5 flex justify-center'>
                        <div className='flex gap-3'>
                            <div className='grid gap-2 mt-1'>
                                <RiCustomerService2Fill className='text-primary' />
                                {/* <BsFacebook className='text-primary' />
                                <GrInstagram className='text-primary' /> */}
                            </div>
                            <div className='grid gap-2'>
                                <h2 className=' font-semibold text-sm'>7:00AM To 10:00PM</h2>
                                {/* <a target='blank' className=' font-bold ' href="https://www.facebook.com/crossfitassemblebd/">CrossFitassemblebd</a>

                                <a target='blank' className=' font-bold ' href="https://www.instagram.com/crossfitassemble/">Instagram</a> */}
                            </div>
                        </div>
                        {/* <span className='flex items-center justify-center  gap-3' ><MdQueryBuilder className='text-primary text-xl' /><h2 className=' font-semibold text-sm'>7:00AM To 10:30PM</h2></span>
                        <span className='flex items-center justify-center gap-3 my-2' ><BsFacebook className='text-primary' /><h2 className=' font-semibold text-sm'>fb.com/CrossFitBoxDHK</h2></span>
                        <span className='flex items-center justify-center gap-3' ><BsGlobe2 className='text-primary' /><h2 className=' font-semibold text-sm'>@CrossFitBoxDHK</h2></span> */}
                    </div>
                </div>
                <div className=" rounded-2xl shadow-md p-3 ">
                    <div className='flex justify-center'>
                        <img src={img2} alt="" />
                    </div>
                    <div className=''>
                        <span className='flex items-center justify-center  gap-3 my-2' ><RiWhatsappFill className='text-primary' /><h2 className=' font-semibold text-sm'>880 18475 46080</h2></span>
                        <span className='flex items-center justify-center gap-3 my-2' ><IoCall className='text-primary' /><h2 className=' font-semibold text-sm'>880 18475 46081</h2></span>
                    </div>
                </div>
                <div className=" rounded-2xl shadow-md p-3 text-center ">
                    <div className='flex justify-center'>
                        <img src={img3} alt="" />
                    </div>
                    <div className='pb-2'>
                        <h2 className='font-semibold text-sm  '>Green Grandeur (8th floor) 58/E,</h2>
                        <h2 className='font-semibold text-sm '>Kemal Ataturk Avenue</h2>
                        <h2 className='font-semibold text-sm '>Banani, Dhaka, Bangladesh</h2>
                    </div>
                </div>
            </div>


            <div className='grid lg:grid-cols-2 md:grid-cols-2 lg:pb-24 pb-10 md:gap-10' >
                <div className='w-full h-full rounded '>
                    {/* <iframe className='w-full h-full rounded-xl border' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.16975104848854!2d90.4090285514542!3d23.793124890614084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70eb0eecca3%3A0x57d900b91d331294!2sGreen%20Grandeur!5e0!3m2!1sen!2sbd!4v1661632020017!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    <iframe title='gy-center' className='w-full h-full rounded-xl border'  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d456.3394637867245!2d90.4089246!3d23.7931358!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7d45f384f41%3A0x98664f1c6c6834c1!2sCrossFit%20Assemble!5e0!3m2!1sen!2sbd!4v1663300853941!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>

                <div className='mt-5'>
                    <div className="form-control mb-3">
                        <input type="text" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Email" className="input input-bordered mb-3" />
                    </div>
                    <div className="form-control h-32">
                        <textarea className="textarea textarea-bordered h-full" placeholder="Your Message"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Send Message</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;