import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import EditIcon from '../Components/Editicon'
import StudentProfileCard from '../Components/StudentProfileCard'
import "./userprofile.css"

import ParentProfileIcon from "../Images/profileParentIcon.svg"
import BranchLines from "../Images/branchlines.svg"
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserProfile = () => {

    const [parentData, setParentData] = useState();
    const [childData, setChildData] = useState([]);

    const location = useLocation();
    const { pathname } = location;


    const getAPIData = async () => {
        try {
            const parent = await axios.get(`https://sensei-app-c8da1e59e645.herokuapp.com/sensei/api/v1/details/parent/${pathname.split("/")[3]}`)
            const child = await axios.get(`https://sensei-app-c8da1e59e645.herokuapp.com/sensei/api/v1/details/children/${parent?.data?.id}`)
            axios.all([parent, child]).then(
                axios.spread((...allData) => {
                    setParentData(allData[0]?.data)
                    setChildData(allData[1]?.data)
                })
            )
        }
        catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getAPIData();
    }, []);

    let occupation;
    let kids = childData.length;

    if (parentData?.occupation && parentData?.spouseOccupation) {
        occupation = "Both";
    } else {
        occupation = "Only one";
    }

    const navigate = useNavigate()

    const deleteUser = async () => {
        localStorage.clear()
        navigate("/temp-sensei/login")
    }


    return (
        <div className='userProfile'>
            <Navbar />
            <div className="mainContainerProfile">
                <div className="parentProfileContainer">
                    <div className="imgNameDiv">
                        <img src={ParentProfileIcon} alt="Parent Profile icon" />
                        <p className='parentName'>{parentData?.name}</p>
                    </div>
                    <EditIcon placeAtTop={true} />
                    <div className="parentInfoDiv">
                        <div className="parentInfoDiv1">
                            <div className="infoUp">
                                <p className="tagName">Location</p>
                                <p className="tagInfo">Baner</p>
                            </div>
                            <div className="infoDown">
                                <p className="tagName">Working</p>
                                <p className="tagInfo">{occupation}</p>
                                <p className="tagName forMargin">Kid(s)</p>
                                <p className="tagInfo">{kids}</p>
                            </div>
                        </div>
                        <div className="parentInfoDiv2">
                            <p className="contactInfoEmail">{parentData?.email}</p>
                            <p className="contactInfoPhNumber">{parentData?.phone}</p>
                        </div>
                    </div>
                    <img className='branchLines' src={BranchLines} alt="branchlines" />
                </div>
                <div className="studentProfileContainer">
                    {childData.map((child, idx) => {
                        return (
                            <StudentProfileCard key={idx} child={child} />
                        )
                    })}
                </div>
                <div className="logoutButton">
                    <p className="btnText" onClick={deleteUser}>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile