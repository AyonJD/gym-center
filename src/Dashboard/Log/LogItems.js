import React, { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa'
import LogDeleteModal from './LogDeleteModal';
import { RiDeleteBin2Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import LogUpdateModal from './LogUpdateModal';

const LogItems = ({ log }) => {
    const [handleBtn, setHandleBtn] = useState(false)
    const [handleUpdateButton, setHandleUpdateButton] = useState(false)
    const navigate = useNavigate()

    const handleLogData = () => {
        //for loop on log object and store it in a new object
        const logData = {};
        for (let [key, value] of Object.entries(log)) {
            if (value === null) {
                value = 'No Data to show'
            }
            logData[key] = value;
        }
        return logData;
    }

    return (
        <tr className="hover">
            <td>{handleLogData().title}</td>
            <td>{handleLogData().type}</td>
            <td>{handleLogData().description}</td>
            <td>{handleLogData().date}</td>
            <td>{handleLogData().day}</td>
            <td>{handleLogData().training}</td>
            <td>{handleLogData().sleep}</td>
            <td>{handleLogData().supplement}</td>
            <td>{handleLogData().food}</td>
            <td>{handleLogData().support}</td>
            <td>{handleLogData().eat_out}</td>
            <td>{handleLogData().coffee}</td>
            <td>{handleLogData().others}</td>
            <td>
                <img src={handleLogData().image} alt="" />
            </td>
        </tr>
    );
};

export default LogItems;