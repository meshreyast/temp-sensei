import React from 'react'
import "./counsellorcard.css"

import Star from "../Images/star2.svg"
import MaskGroup1 from "../Images/maskgroup1.svg"

const CouncellorCard = ({ counsellorName, speciality, rating, price }) => {
    return (
        <div className='counsellorMainDiv'>
            <img className='maskGroup' src={MaskGroup1} alt="maskgroup" />
            <div className="counsellorContentDiv">
                <div className="counsellorInfo">
                    <p className="counsellorName">{counsellorName}</p>
                    <p className='counsellorSpeciality'>{speciality}</p>
                    <p className="counsellorPrice">&#8377; {price}</p>
                </div>
                <div className="cousellorRating">
                    <img src={Star} alt="star" />
                    <p className="counselloRatingText">{rating}</p>
                </div>
            </div>
        </div>
    )
}

export default CouncellorCard