import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-primary'>
            <footer class="mid-container items-center p-4 text-neutral-content">
                <div className='flex justify-between'>
                    <div class="flex gap-5 py-2 text-white">
                        <a href="#"><FaFacebook/></a>
                        <a href="#"><AiOutlineInstagram/></a>
                        <a href="#"><FaTwitter/></a>
                        <a href="#"><BsYoutube/></a>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-sm'>POWERD BY -<span className='font-bold text-white'> RIZIQ IT SOLUTIONS</span></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;