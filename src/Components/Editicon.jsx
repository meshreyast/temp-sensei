import React from 'react'
import EditIcon from "../Images/editicon.svg"
import "./editIcon.css"

const Editicon = ({ placeAtTop }) => {

    console.log(placeAtTop)

    return (
        <div><div className={`editIcon ${placeAtTop ? "atTop" : "atBottom"}`}>
            <img src={EditIcon} alt="editicon" />
        </div></div>
    )
}

export default Editicon