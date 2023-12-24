import React from 'react'
import Navbar from "../Components/Navbar"

import "./userdashboard.css"
import Subject from '../Components/Subject'

import data from ".././utils"


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
                {data.map((item, i) => (
                    <Subject key={i} subjectName={item?.subjectName} percentage={item?.percentage} innerSubjectDivColor={item?.innerSubjectDivColor} innerBarColor={item?.innerBarColor} />
                ))}

            </div>
        </div>
    )
}

export default UserDashboard