import { useState } from "react";
import "./activities.css"

import LeftScroll from "../Images/leftScroll.svg"
import RightScroll from "../Images/rightScroll.svg"

import { activityData } from "../utils";
import ActivityCard from "./ActivityCard";

const Activities = () => {

    const [value, setValue] = useState('fruit');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const options = [
        { label: 'All', value: 'all' },
        { label: 'New', value: 'new' },
        { label: 'Completed', value: 'completed' },
        { label: 'Incomplete', value: 'incomplete' },
        { label: 'Upcoming', value: 'upcoming' },
    ];

    const inSchoolActivities = activityData[0];
    const afterSchoolActivities = activityData[1];

    return (
        <>
            <div className="activityDiv1">
                <div className="activityDiv1Header">
                    <p className="activitiesDivHeading">In-School Activities</p>
                    <div className="activitiesDiv1Dropdown">
                        <select className="dropdownStyles" value={value} onChange={handleChange}>
                            {options.map((option) => (
                                <option className="option" value={option.value}>{option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="activitytopics">
                    {inSchoolActivities.map((item, i) => (
                        <ActivityCard key={i} unit={item?.unit} time={item?.time} topic={item?.topic} />
                    ))}
                </div>
            </div>
            <div className="activityDiv2">
                <div className="activityDiv2Header">
                    <p className="activitiesDivHeading">After-School Activities</p>
                    <div className="scrollButtons">
                        <img src={LeftScroll} alt="leftscroll" />
                        <img className="rightScrollButton" src={RightScroll} alt="rightscroll" />
                    </div>
                </div>
                <div className="activitytopics">
                    {afterSchoolActivities.map((item, i) => (
                        <ActivityCard key={i} unit={item?.unit} time={item?.time} topic={item?.topic} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Activities