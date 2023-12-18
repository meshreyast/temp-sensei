import React, { useEffect, useState } from 'react'
import "./login.css";

import mainLogo from "../Images/mainlogo.svg"
import sun from "../Images/sun.svg"
import lowerLayerSVG from "../Images/lower.svg"
import middleLayerSVG from "../Images/middle.svg"
import topLayerSVG from "../Images/top.svg"

const Login = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 3000)
    }, [])


    return (
        <div className='loadingMain'>
            <div className="background">
                <div className="layers">
                    <img className='ll' src={lowerLayerSVG} alt="lower" />
                    <img className='ml' src={middleLayerSVG} alt="middle" />
                    <img className='tl' src={topLayerSVG} alt="top" />
                </div>

                <div className="top">
                    <div className="svgcontainers">

                        <img className={`${isLoading ? "sun" : "sunzoomin"}`} src={sun} alt="sunsubstract" />

                        <img className='logo' src={mainLogo} alt="sensei logo" />
                    </div>
                </div>
                {isLoading && <p className="loadingText">#keepasking</p>}
                {
                    isLoading &&
                    <div className="progessbarMain">
                        <div className="progressbarSub"></div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Login