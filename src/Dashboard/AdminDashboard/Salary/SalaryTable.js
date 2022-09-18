import React from 'react';

const SalaryTable = ({ salaryDetails }) => {
    // console.log(salaryDetails)
    return (
        <div className='mb-5'>
            <div className="overflow-x-auto ">
                <table className="table table-compact w-full">
                    <thead>
                        <tr className='bg-accent text-center'>
                            <th className='bg-accent'></th>
                            <th className='bg-accent'>User</th>
                            <th className='bg-accent'>name</th>
                            <th className='bg-accent'>Email</th>
                            <th className='bg-accent'>Date</th>
                            <th className='bg-accent'>Amount</th>
                            <th className='bg-accent'>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            salaryDetails.map((data, index) => {
                                return (
                                    <tr className='text-center'>
                                        <th>{++index}</th>
                                        <td>
                                            <img className='w-12 h-12 rounded-full mx-auto' src={data?.user?.profile_image} alt="" />
                                        </td>
                                        <td>{data?.user?.name}</td>
                                        <td>{data?.user?.email}</td>
                                        <td>{data?.date}</td>
                                        <td className='font-bold'>৳ {data?.amount}</td>
                                        {
                                            data?.status ? <td ><button className='btn  btn-xs btn-success text-white'>Paid</button></td> : <td ><button className='btn btn-xs btn-error text-white'>Unpaid</button></td>
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalaryTable;