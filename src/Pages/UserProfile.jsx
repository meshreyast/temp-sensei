import React from 'react'
import Navbar from '../Components/Navbar'
import "./userprofile.css"

import ParentProfileIcon from "../Images/profileParentIcon.svg"
import EditIcon from "../Images/editicon.svg"

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
                    <div className="editicon">
                        <img src={EditIcon} alt="editicon" />
                    </div>
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
                </div>
            </div>
        </div>
    )
}

export default UserProfile