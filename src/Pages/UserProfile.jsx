import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import EditIcon from '../Components/Editicon'
import StudentProfileCard from '../Components/StudentProfileCard'
import "./userprofile.css"

import ParentProfileIcon from "../Images/profileParentIcon.svg"
import BranchLines from "../Images/branchlines.svg"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchChildrenRequest } from '../Redux/slice/childrenSlice'

const UserProfile = () => {

    const parentData = useSelector(state => state?.parents?.data)
    const childData = useSelector(state => state?.children?.data)
    const dispatch = useDispatch();

    const id = parentData?.id;

    useEffect(() => {
        dispatch(fetchChildrenRequest({ id }))
    }, [dispatch, id])

    let occupation;
    let kids = childData.length;

    if (parentData?.occupation && parentData?.spouseOccupation) {
        occupation = "Both";
    } else {
        occupation = "Only one";
    }

    const navigate = useNavigate()

    const deleteUser = async () => {
        localStorage.removeItem("userPhoneNumber");
        navigate("/login")
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
                    {childData.map((child, id) => {
                        return (
                            <StudentProfileCard key={id} child={child} />
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