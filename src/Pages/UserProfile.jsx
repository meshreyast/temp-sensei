import React from 'react'
import Navbar from '../Components/Navbar'
import Editicon from '../Components/Editicon'
import StudentProfileCard from '../Components/StudentProfileCard'
import "./userprofile.css"

import ParentProfileIcon from "../Images/profileParentIcon.svg"
import BranchLines from "../Images/branchlines.svg"

const UserProfile = () => {
    return (
        <div className='userProfile'>
            <Navbar />
            <div className="mainContainerProfile">
                <div className="parentProfileContainer">
                    <div className="imgNameDiv">
                        <img src={ParentProfileIcon} alt="Parent Profile icon" />
                        <p className='parentName'>Parent Full Name</p>
                    </div>
                    <Editicon placeAtTop={true} />
                    <div className="parentInfoDiv">
                        <div className="parentInfoDiv1">
                            <div className="infoUp">
                                <p className="tagName">Location</p>
                                <p className="tagInfo">Baner</p>
                            </div>
                            <div className="infoDown">
                                <p className="tagName">Working</p>
                                <p className="tagInfo">Both</p>
                                <p className="tagName forMargin">Kid(s)</p>
                                <p className="tagInfo">02</p>
                            </div>
                        </div>
                        <div className="parentInfoDiv2">
                            <p className="contactInfoEmail">abcd@email.com</p>
                            <p className="contactInfoPhNumber">91XXXXX45XX</p>
                        </div>
                    </div>
                    <img className='branchLines' src={BranchLines} alt="branchlines" />
                </div>
                <div className="studentProfileContainer">
                    <StudentProfileCard grade={"02"} />
                    <StudentProfileCard grade={"04"} />
                </div>
                <div className="logoutButton">
                    <p className="btnText">Logout</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile