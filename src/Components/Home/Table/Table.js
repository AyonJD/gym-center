import React from 'react';
import { useQuery } from 'react-query';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import Loading from '../../../hooks/Loading/Loading';
import SingleTable from './SingleTable';

const Table = () => {
    const morningSchedule = [
        { id: 1, time: '07:00 AM', data: ['CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', '', '',] },
        { id: 2, time: '08:00 AM', data: ['', '', 'Mobilizer', 'Mobilizer', 'Mobilizer', 'Mobilizer', 'Mobilizer',] },
        { id: 3, time: '09:00 AM', data: ['CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', '', '',] },
        { id: 4, time: '11:30 AM', data: ['', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', '', '',] },
        { id: 5, time: '12:00 PM', data: ['', '', 'Mobilizer', 'Mobilizer', 'Mobilizer', 'Mobilizer', 'Mobilizer',] },
        { id: 6, time: '03:00 PM', data: ['', 'HIIT', '', '', 'HIIT', '', '',] },
        { id: 7, time: '04:00 PM', data: ['', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', '',] },
        { id: 8, time: '05:00 PM', data: ['Mobilizer', 'Mobilizer', 'Mobilizer', 'Mobilizer', 'Mobilizer', '', '',] },
        { id: 9, time: '06:00 PM', data: ['', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', '',] },
        { id: 10, time: '07:00 PM', data: ['Power Hour', 'Power Hour', 'Mobilizer', 'Mobilizer', 'Power Hour', 'Power Hour', 'Power Hour',] },
        { id: 11, time: '08:00 PM', data: ['', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', '',] }
    ];

    let timeThree = [];
    let timeSeven = [];
    let timeEight = [];
    let timeNine = [];
    let timeEleven = [];
    let timeElevenFiftyNine = [];
    let timefour = [];
    let timeFive = [];
    let timeSevenPM = [];
    let timeTen = [];

    let saturday = [];
    let sunday = [];
    let monday = [];
    let tuesday = [];
    let wednesday = [];
    let thursday = [];
    let friday = [];



    const { token } = AuthUser()

    const { data: schedule, isLoading, refetch } = useQuery('users', () =>
        fetch(`https://gym-management97.herokuapp.com/api/all_shedule`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }

    // console.log(schedule);

    // schedule.data.forEach(item => {
    //     if (item.from_time === "07:00:00") {
    //         timeSeven.push({ time: "07:00 AM", data: item })
    //     } else if (item.from_time === "15:00:00") {
    //         timeThree.push({ time: "03:00 PM", data: item })
    //     } else if (item.from_time === "08:00:00") {
    //         timeEight.push({ time: "08:00 AM", data: item })
    //     } else if (item.from_time === "09:00:00") {
    //         timeNine.push({ time: "09:00 AM", data: item })
    //     } else if (item.from_time === "11:00:00") {
    //         timeEleven.push({ time: "11:00 AM", data: item })
    //     } else if (item.from_time === "11:59:00") {
    //         timeElevenFiftyNine.push({ time: "11:59 AM", data: item })
    //     } else if (item.from_time === "16:00:00") {
    //         timefour.push({ time: "04:00 PM", data: item })
    //     } else if (item.from_time === "17:00:00") {
    //         timeFive.push({ time: "05:00 PM", data: item })
    //     } else if (item.from_time === "19:00:00") {
    //         timeSevenPM.push({ time: "07:00 PM", data: item })
    //     } else if (item.from_time === "10:00:00") {
    //         timeTen.push({ time: "10:00 PM", data: item })
    //     }
    // })

    schedule.data.forEach(item => {
        if (item.day === "Saturday") {
            saturday.push(item)
        } else if (item.day === "Sunday") {
            sunday.push(item)
        } else if (item.day === "Monday") {
            monday.push(item)
        } else if (item.day === "Tuesday") {
            tuesday.push(item)
        } else if (item.day === "Wednesday") {
            wednesday.push(item)
        } else if (item.day === "Thursday") {
            thursday.push(item)
        } else if (item.day === "Friday") {
            friday.push(item)
        }
    })

    const newSchedule = [
        { day: "Saturday", data: saturday },
        { day: "Sunday", data: sunday },
        { day: "Monday", data: monday },
        { day: "Tuesday", data: tuesday },
        { day: "Wednesday", data: wednesday },
        { day: "Thursday", data: thursday },
        { day: "Friday", data: friday },
    ]

    console.log(newSchedule);

    return (
        <div className='mid-container mx-auto'>
            <h1 className='md:text-4xl text-3xl font-bold text-primary mb-6 '>Class Schedule</h1>
            <SingleTable tableData={morningSchedule} />
        </div>
    );
};

export default Table;