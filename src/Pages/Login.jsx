import React from 'react'
import "./login.css";

import mainLogo from "../Images/mainlogo.svg"
import sun from "../Images/sun.svg"
import lowerLayerSVG from "../Images/lower.svg"
import middleLayerSVG from "../Images/middle.svg"
import topLayerSVG from "../Images/top.svg"

const Login = () => {
    return (
        <div className='loadingMain'>
            <div className="background">
                <img className='ll' src={lowerLayerSVG} alt="lower" />
                <img className='ml' src={middleLayerSVG} alt="lower" />
                <img className='tl' src={topLayerSVG} alt="top" />

                <img className='sun' src={sun} alt="sunsubstract" />

                <img className='logo' src={mainLogo} alt="sensei logo" />
                <p className='loadingText'>#keepasking</p>
                <div className="progessbbarMain">
                    <div className="progressbarSub"></div>
                </div>
            </div>
        </div>
    )
}

export default Login