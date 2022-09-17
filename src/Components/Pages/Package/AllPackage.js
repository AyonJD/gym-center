import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import img1 from '../../../assets/Image/pricing/Fitness tracker-amico.png'
import img3 from '../../../assets/Image/pricing/Workout-amico.png'
import img2 from '../../../assets/Image/pricing/Workout-rafiki.png'
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import Loading from '../../../hooks/Loading/Loading';

const AllPackages = () => {
    const { token } = AuthUser()
    const navigate = useNavigate();

    // useEffect(() => {
    //     fetch('https://gym-management97.herokuapp.com/api/package_order/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         },
    //         body: JSON.stringify({
    //             package: packageId
    //         })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    // }, [])

    const { data: packages, isLoading, refetch } = useQuery('users', () =>
        fetch(`https://gym-management97.herokuapp.com/api/packages`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }


    console.log(packages)

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-7 md:mb-16 mb-10'>
            {
                packages?.data?.map((item, index) => {
                    return (
                        <div className="shadow-xl rounded-md">
                            <h1 className='text-center text-3xl font-bold pt-5 mb-2'>{item?.package_type?.package_title}</h1>

                            <div className='w-24 mx-auto'>
                                <img className='w-full' src={img1} alt="Shoes" />
                            </div>

                            <div className="card-body pt-0">
                                <div className='text-center'>
                                    <h1 className="text-2xl font-bold text-primary mx-auto flex justify-center items-end">৳ {item?.discounted_price?.split('.')[0]}/<span className='text-gray-500 font-normal text-sm'>
                                        {
                                            item?.duration_days === 30 && <h2>30Days</h2>
                                        }
                                        {
                                            item?.duration_days === 60 && <h2>2 Months</h2>
                                        }
                                        {
                                            item?.duration_days === 90 && <h2>3 Months</h2>
                                        }
                                        {
                                            item?.duration_days === 180 && <h2>6 Months</h2>
                                        }
                                    </span></h1>


                                    <span className='text-sm text-secondary'><del>৳ {item?.original_price
                                    }</del></span>
                                </div>
                                <p className='text-xs text-secondary text-justify'>{item?.description.slice(0, 250)}.</p>
                                <h2 className='text-xl font-bold mt-1'>Facilities</h2>
                                <div className='ml-4 text-xs'>
                                    <li className='mb-1 '>Total Class: {item?.total_class}</li>
                                    <li className='mb-1 '>Total Consultation
                                        : {item?.total_consultation
                                        }</li>
                                    <li className='mb-1 '>Customizable Calendar</li>
                                    <li className='mb-1 '>Healthy Recipes</li>
                                    <li className='mb-1'>Health and Fitness Articles</li>
                                    <li className='mb-1'>No Credit Card Needed</li>
                                </div>
                                <div
                                    onClick={() => {
                                        navigate(`/payment/${item?.id}`)
                                    }}
                                    className="card-actions justify-center mt-5">
                                    <button className="btn btn-primary w-full">Choose Plan</button>
                                </div>
                            </div>
                        </div>)
                })

            }

        </div>
    );
};

export default AllPackages;