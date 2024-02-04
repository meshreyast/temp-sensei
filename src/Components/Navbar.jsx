import React from 'react'
import "./navbar.css"

import mainLogo from "../Images/mainlogo.svg"
import studentProfPic from "../Images/studentProfPic.svg"
import NavbarRectangle from "../Images/Rectangle 719.svg"
import Bell from "../Images/bell.svg"


const Navbar = () => {

    let idName;

    if (window.location.pathname === "/temp-sensei/userdashboard") {
        idName = "Student 1 name"
    } else {
        idName = "#sensei_Stu_Id";
    }


    return (
        <div className='navbar'>
            <div className="mainContainer">
                <div className="logoBlock">
                    <img className='logoUser' src={mainLogo} alt="sensei logo" />
                </div>
                <div className="panelBlock">
                    <div className="userInfo">
                        <div className="studentIdInfo">
                            <img className='studentIdSlate' src={NavbarRectangle} alt="slate" />
                            <p className="studentIdText">{idName}</p>
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