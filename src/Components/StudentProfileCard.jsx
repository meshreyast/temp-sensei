import React from 'react'
import "./studentProfileCard.css"

import StudentReactangle from "../Images/studentrectangle.svg"
import StudentImageIcon from "../Images/studentimageicon.svg"
import Editicon from './Editicon'

const StudentProfileCard = ({ grade }) => {
    return (
        <div className='studentProfileCard'>
            <div className="studentIdRectangleDiv">
                <img src={StudentReactangle} alt="studentReactangle" />
                <p className='IDText'>#sensei_Stu_Id</p>
            </div>
            <div className="studentImageDiv">
                <img src={StudentImageIcon} alt="studentimage icon" />
                <Editicon placeAtTop={false} />
            </div>
            <div className="studentProfileInfo">
                <div className="namesDiv">
                    <p className="avatarName">Avatar Name</p>
                    <p className="stuFullName">Student Full name</p>
                </div>
                <div className="schoolInfo">
                    <div className="row">
                        <p className="tagName">Grade</p>
                        <p className="tagInfo">{grade}</p>
                    </div>
                    <div className="row">
                        <p className="tagName">School</p>
                        <p className="tagInfo">Dhruv Internationals School</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentProfileCard