import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import "./login.css";

import mainLogo from "../Images/mainlogo.svg"
import sun from "../Images/sun.svg"
import lowerLayerSVG from "../Images/lower.svg"
import middleLayerSVG from "../Images/middle.svg"
import topLayerSVG from "../Images/top.svg"
import indiaFlag from "../Images/emojione_flag-for-india.svg"
import googleIcon from "../Images/icons_google.svg"
import appleIcon from "../Images/icons_apple.svg"
import { useSelector, useDispatch } from 'react-redux';
import { fetchParentsRequest } from '../Redux/slice/parentSlice';

const Login = () => {

    const [phoneNum, setPhoneNum] = useState("");

    const Data = useSelector(state => state?.parents);
    const parentData = Data?.data;
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false)
        dispatch(fetchParentsRequest({ phoneNum }))
    }, [dispatch, phoneNum])

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!phoneNum || phoneNum.length !== 10) {
            alert("Please Enter a Valid Phone Number");
        } else if (phoneNum.length === 10 && phoneNum === parentData?.phone) {
            navigate(`/user/${parentData.name}`)
        } else {
            alert(`User doesn't exist`);
        }
    }

    return (
        <div className='loadingMain'>
            <div className="background">
                <div className="layers">
                    <img className={`ll ${isLoading ? "" : "layerszoomin"}`} src={lowerLayerSVG} alt="lower" />
                    <img className={`ml ${isLoading ? "" : "layerszoomin"}`} src={middleLayerSVG} alt="middle" />
                    <img className={`tl ${isLoading ? "" : "layerszoomin"}`} src={topLayerSVG} alt="top" />
                </div>

                <div className="top">
                    <div className={`svgcontainer ${isLoading ? "" : "h"}`}>
                        <img className={`${isLoading ? "sun" : "sunzoomin"}`} src={sun} alt="sunsubstract" />

                        <img className={`${isLoading ? "logo" : "logozoomin"}`} src={mainLogo} alt="sensei logo" />
                    </div>
                    {!isLoading && (
                        <div className="maincontent">
                            <p className='phonenum'>Phone number</p>
                            <div className="pnumfield">
                                <img src={indiaFlag} alt="Indian flag" />
                                <p className="triangleDown"></p>
                                <p className="vl"></p>
                                <input type="tel"
                                    name='phonenumber'
                                    className='numfield'
                                    value={phoneNum}
                                    onChange={e => setPhoneNum(e.target.value)}
                                    placeholder='Enter number' />
                            </div>
                            <p className="otpText">A 4 digit OTP will be sent to verify your mobile number.</p>
                            <button className='submitBTN'
                                type='submit'
                                onClick={handleSubmit} >
                                Get OTP
                            </button>
                            <div className="hr"></div>
                            <div className="altLogin">
                                <p className='altLoginText'>Or Sign in with</p>
                                <div className="iconBox">
                                    <div className="icons">
                                        <img src={googleIcon} alt="google icon" />
                                    </div>
                                    <div className="icons">
                                        <img src={appleIcon} alt="apple icon" />
                                    </div>
                                </div>
                                <p className="altLinkText">Not registered yet?<span className='linkText'>Create an Account</span></p>
                            </div>
                        </div>
                    )}

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

