import React from 'react';
import img1 from '../../../assets/Image/CrossFit/pic1.png'
import img2 from '../../../assets/Image/CrossFit/pic2.png'

const CrossFit = () => {
    return (
        <div className='mid-container'>
            <div className='grid grid-cols-2 gap-10 py-16'>
                <div className='flex items-center '>
                    <div>
                        <h1 className='text-3xl text-primary font-extrabold mb-5'>WHAT IS CROSSFIT?</h1>
                        <p className='font-bold lg:w-[90%] '>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!</p>

                        <h1 className='uppercase text-primary font-bold mt-5 cursor-pointer'>see more</h1>
                    </div>
                </div>
                <div>
                    <img src={img1} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-10 py-16'>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div className='flex items-center'>
                    <div>
                        <h1 className='text-3xl text-primary font-extrabold mb-5'>All sessions are led by a fully qualified CrossFit coach.</h1>
                        <p className='font-bold lg:w-[90%] '>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!</p>

                        <h1 className='uppercase text-primary font-bold mt-5 cursor-pointer'>see more</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CrossFit;