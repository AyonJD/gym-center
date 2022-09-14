import React from 'react';
import img from '../../../assets/Image/AboutUs/abb-bg.png'
import SharedNav from '../Shared/SharedNav';
import '../../Home/About/About.css'

const AboutUs = () => {
    return (
        <div>
            <SharedNav />
            <img className="banner -mt-[68px] z-0 w-full flex items-center justify-center flex-col" src={img} alt="" />
            <div>
                <div className='mid-container'>
                    <h1 className='text-center text-5xl font-bold mb-16 mt-10 mx-auto'>Lorem Ipsum is simple dummy text of the printing</h1>

                    <p className='text-center text-secondary mx-auto text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>

                    <div className='border-l-[3px] border-warning mt-20 py-3'>
                        <div className='ml-3'>
                            <h1 className='text-2xl font-bold mb-5'><span className='border-b-[3px] border-warning'>Why Us</span> </h1>
                            <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                        </div>
                    </div>

                    <div className='border-r-[3px] border-indigo-400 mt-20 py-3'>
                        <div className='mr-3'>
                            <h1 className='text-2xl font-bold mb-5  text-end'><span className='border-b-[3px] border-indigo-400'>Mission &  Vision</span> </h1>
                            <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                        </div>
                    </div>
                    <div className='border-l-[3px] border-warning mt-20 py-3 mb-24'>
                        <div className='ml-3'>
                            <h1 className='text-2xl font-bold mb-5'><span className='border-b-[3px] border-warning'>Core Values</span> </h1>
                            <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;