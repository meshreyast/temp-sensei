import React from 'react'
import "./activityCard.css"

import SelfIdentity from "../Images/selfIdentity.jpeg";
import StrengthsAndChallenges from "../Images/strengthsAndChallenges.jpeg";
import StrengthsAndChallenges2 from "../Images/strengthsAndChallenges2.jpeg";
import MyBodyAndEmotions from "../Images/myBodyAndEmotions.jpeg"

import YellowArrow from "../Images/yellowArrow.png"
import Lock from "../Images/lock-50.png"

import MyFavouriteThings from "../Images/myFavouriteThings.jpeg"
import MyProudMomentsAndRest from "../Images/myProudMoments.jpeg"

const ActivityCard = ({ unit, time, topic }) => {

    let specificTopicPicture;

    switch (unit) {
        case 1.1:
            specificTopicPicture = SelfIdentity;
            break;
        case 1.2:
            specificTopicPicture = [StrengthsAndChallenges, YellowArrow];
            break;
        case 2.1:
            specificTopicPicture = [MyBodyAndEmotions, YellowArrow];
            break;
        case 2.2:
            specificTopicPicture = [StrengthsAndChallenges2, YellowArrow];
            break;
        case "ASA 1":
            specificTopicPicture = MyFavouriteThings;
            break;
        case "ASA 2":
            specificTopicPicture = [MyProudMomentsAndRest, Lock];
            break;
        case "ASA 3":
            specificTopicPicture = [MyProudMomentsAndRest, Lock];
            break;
        case "ASA 4":
            specificTopicPicture = [MyProudMomentsAndRest, Lock];
            break;
        default:
            break;
    }

    return (
        <div className='card'>
            <div className="imageDiv">
                {time === "30mins" ? <p className="opacity"></p> : ""}
                {specificTopicPicture.length === 2 ?
                    (
                        <>
                            <img className='imageDivImage' src={specificTopicPicture[0]} alt={topic} />
                            {time === "5mins" ? <p className="opacity2"></p> : ""}
                            <img className='yellowArrow' src={specificTopicPicture[1]} alt={topic} />
                        </>
                    ) : (<img className='imageDivImage' src={specificTopicPicture} alt={topic} />)}
            </div>
            <div className="activityDetails">
                <p className="activityInfo1">{unit}</p>
                <p className="activityInfo2">{time}</p>
            </div>
            <p className="topic">{topic}</p>
        </div>
    )
}

export default ActivityCard