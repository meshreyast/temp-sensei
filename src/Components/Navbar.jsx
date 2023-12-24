import React from 'react'
import "./navbar.css"

import mainLogo from "../Images/mainlogo.svg"
import studentProfPic from "../Images/studentProfPic.svg"
import Rectangle from "../Images/Rectangle 719.svg"
import Bell from "../Images/bell.svg"


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="mainContainer">
                <div className="logoBlock">
                    <img className='logoUser' src={mainLogo} alt="sensei logo" />
                </div>
                <div className="panelBlock">
                    <div className="userInfo">
                        <div className="studentIdInfo">
                            <img className='studentIdSlate' src={Rectangle} alt="slate" />
                            <p className="studentIdText">#sensei_Stu_Id</p>
                        </div>
                        <img className='profPic' src={studentProfPic} alt="profilepicture" />
                    </div>
                    <div className="bell">
                        <img src={Bell} alt="bellicon" />
                        <p className='dot'></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar