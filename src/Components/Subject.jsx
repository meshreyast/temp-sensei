import "./subject.css"

import MentalHealthPic from "../Images/mentalhealthpic.svg"
import SexEducationPic from "../Images/sexeducationpic.svg"
import MoralScience from "../Images/moralsciencepic.svg"
import CareerGuidance1 from "../Images/careerguidance1.svg"
import CareerGuidance2 from "../Images/careerguidance2.svg"
import Activities from "./Activities"
import { useState } from "react"

const Subject = ({ subjectName, percentage, innerSubjectDivColor, innerBarColor }) => {

    const [show, setShow] = useState(false);

    const colorforinnerSubjectDiv = {
        background: innerSubjectDivColor
    }

    const sizeAndColorForInnerBar = {
        background: innerBarColor,
        width: percentage
    }

    let specificSubjectPicture;

    switch (subjectName) {
        case "Mental health":
            specificSubjectPicture = MentalHealthPic;
            break;
        case "Sex Education":
            specificSubjectPicture = SexEducationPic;
            break;
        case "Moral Science":
            specificSubjectPicture = MoralScience;
            break;
        case "Career Guidance":
            specificSubjectPicture = [CareerGuidance1, CareerGuidance2];
            break;
        default:
            break;
    }

    return (
        <>
            <div className="subjectDiv" onClick={() => setShow(!show)}>
                {specificSubjectPicture.length === 2 ? (
                    <>
                        <img className='subjectPic' src={specificSubjectPicture[0]} alt={subjectName} />
                        <img className='subjectPic1' src={specificSubjectPicture[1]} alt={subjectName} />
                    </>
                ) : (<img className='subjectPic' src={specificSubjectPicture} alt={subjectName} />)}
                <div className="innerSubjectDiv" style={colorforinnerSubjectDiv}>
                    <p className="percentage">{percentage}</p>
                    <p className="subjectName">{subjectName}</p>
                    <div className="progressBar">
                        <div className="outerbar">
                            <div className="innerBar" style={sizeAndColorForInnerBar}></div>
                        </div>
                    </div>
                </div>
            </div>
            {show && (
                <div className="activitiesDiv">
                    <Activities />
                </div>
            )}
        </>
    )
}

export default Subject