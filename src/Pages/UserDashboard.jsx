import React from 'react'
import Navbar from "../Components/Navbar"

import "./userdashboard.css"
import Subject from '../Components/Subject'

import { subjectData, counsellorData } from ".././utils"
import CounsellorCard from '../Components/CounsellorCard'


const UserDashboard = () => {

    return (
        <div className='userDashboard'>
            <Navbar />
            <div className="mainContainerUser">
                <div className="welcome">
                    <p className='hello'>Hello!</p>
                    <p className="avatarName">Avatar name</p>
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
            </div>
        </div>
    )
}

export default UserDashboard