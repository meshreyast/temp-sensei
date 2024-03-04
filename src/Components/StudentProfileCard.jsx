import React from 'react'
import "./studentProfileCard.css"

import StudentReactangle from "../Images/studentrectangle.svg"
import StudentImageIcon from "../Images/studentimageicon.svg"
import Editicon from './Editicon'
import { useNavigate } from 'react-router-dom'

const StudentProfileCard = ({ child }) => {

    const navigate = useNavigate()

    const toDashboard = async () => {
        navigate(`/temp-sensei/user/${child?.childName}/userdashboard`)
    }

    return (
        <div className='studentProfileCard' onClick={toDashboard}>
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
                    <p className="stuFullName">{child?.childName ? child?.childName : "Child name"}</p>
                </div>
                <div className="schoolInfo">
                    <div className="row">
                        <p className="tagName">Grade</p>
                        <p className="tagInfo">{child?.grade}</p>
                    </div>
                    <div className="row">
                        <p className="tagName">School</p>
                        <p className="tagInfo">{child?.schoolId}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentProfileCard