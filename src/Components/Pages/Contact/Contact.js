import React from 'react';
import SharedNav from '../Shared/SharedNav';
import logo from '../../../assets/Image/Logo/logo2.png'
import img from '../../../assets/Image/contact/Contact.png'
import Form from './Form';

const Contact = () => {
    return (
        <>
            <SharedNav />
            <div>
                <div className='mid-container'>
                    <div className='grid grid-cols-2 gap-10 mt-16'>
                        <div>
                            <img src={logo} alt="" />
                            <h2 className='font-bold text-3xl py-3 uppercase'>Contact US</h2>

                            <p className='py-3'>Flick is here to help you;
                                Our experts are available to answer any questions you might have. We’ve got the answers.</p>

                            <h2 className='text-xl font-bold uppercase mt-3'>Visit us</h2>
                            <p>Office no. G-02. Building 1, Ground Floor. Dubai</p>
                            <p>Dubai Media City – Dubai</p>

                            <h2 className='text-xl font-bold uppercase mt-5'>Email us</h2>
                            <p>email@mailserver.com</p>

                            <h2 className='text-xl font-bold uppercase mt-5'>Call us</h2>
                            <p>+000-0-000-000</p>
                            <p>+000-0-000-000</p>
                        </div>

                        <div className='w-full'>
                            <img className='w-full' src={img} alt="" />
                        </div>
                    </div>
                </div>

                <Form />


            </div>
        </>
    );
};

export default Contact;