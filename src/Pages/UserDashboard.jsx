import React from 'react'
import Navbar from "../Components/Navbar"

import "./userdashboard.css"
import Subject from '../Components/Subject'

import { subjectData, counsellorData } from ".././utils"
import CounsellorCard from '../Components/CounsellorCard'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const UserDashboard = () => {
    const parentData = useSelector(state => state?.parents?.data)
    let address = `/temp-sensei/user/${parentData?.name}`;

    return (
        <div className='userDashboard'>
            <Navbar />
            <div className="mainContainerUser">
                <div className="welcome">
                    <p className='hello'>Hello!</p>
                    <Link style={{ textDecoration: "none" }} to={address}>
                        <p className="avatarName">Avatar name</p>
                    </Link>
                    <p className="welcomeText">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                </div>
                {subjectData.map((item, i) => (
                    <Subject key={i} subjectName={item?.subjectName} percentage={item?.percentage} innerSubjectDivColor={item?.innerSubjectDivColor} innerBarColor={item?.innerBarColor} />
                ))}
                <div className="counsellorsDiv">
                    <h2 className='counsellorsDivText'>Trending Counsellors</h2>
                    {counsellorData.map((item, i) => (
                        <CounsellorCard counsellorName={item?.counsellorName} speciality={item?.speciality} rating={item?.rating} price={item?.price} />
                    ))}
                </div>
                <div className="schoolDetailsDiv">
                    <h2 className='schoolDetailsText'>School Details</h2>
                    <div className="schoolDetailsContent">
                        <div className="keys">
                            <p className='key'>School Name:</p>
                            <p className='key'>Location:</p>
                            <p className='key'>Email ID:</p>
                            <p className='key'>Phone No.:</p>
                        </div>
                        <div className="values">
                            <p className="value">Spring Dale Public School</p>
                            <p className="value">Vadgaon Bk, Pune</p>
                            <p className="value">abcdef@xyz.com</p>
                            <p className="value">020-45478203</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard