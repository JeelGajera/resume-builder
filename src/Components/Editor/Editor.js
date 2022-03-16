import React, { useState, useEffect } from 'react';
import InputControl from "../InputControl/InputControl.js";
import { XCircle } from "react-feather";
import style from "./Editor.module.css";

function Editor(props) {
    const sections = props.sections;

    const information = props.information;

    const [activeSecKey, setActiveSecKey] = useState(Object.keys(sections)[0]);

    const [activeInfo, setActiveInfo] = useState(
        information[sections[Object.keys(sections)[0]]]
    );

    const workExBody = (
        <div className={style.detail}>
            <div className={style.row}>
                <InputControl label="Company Name" placeholder="Enter Company name eg. ISRO" />
            </div>
            <InputControl label="Title" placeholder="Enter Title eg. Frontend Developer" />
            <div className={style.row}>
                <InputControl label="Certificate Link" placeholder="Enter Certificate link" />
                <InputControl label="Location" placeholder="Enter location eg. Remote" />
            </div>
            <div className={style.row}>
                <InputControl label="Start Date" type="date" placeholder="Enter start date of work" />
                <InputControl label="End Date" type="date" placeholder="Enter end date of work" />
            </div>
            <div className={style.column}>
                <label>Enter Work Description</label>
                <InputControl placeholder="Line 1" />
                <InputControl placeholder="Line 2" />
                <InputControl placeholder="Line 3" />
            </div>
        </div>
    );

    const projectBody = (
        <div className={style.detail}>
            <div className={style.row}>
                <InputControl label="Title" placeholder="Enter title eg. Chap Application" />
            </div>
            <InputControl label="Overview" placeholder="Enter basic overview of project" />
            <div className={style.row}>
                <InputControl label="Deployed Link" placeholder="Enter Deployed link of project" />
                <InputControl label="Github Link" placeholder="Enter Github link of project" />
            </div>
            <div className={style.column}>
                <label>Enter Project Description</label>
                <InputControl placeholder="Line 1" />
                <InputControl placeholder="Line 2" />
                <InputControl placeholder="Line 3" />
            </div>
        </div>
    );

    const educationBody = (
        <div className={style.detail}>
            <div className={style.row}>
                <InputControl label="Title" placeholder="Enter title eg. B.Tech" />
                <InputControl label="College/School Name" placeholder="Enter name of colege/school" />
            </div>
            <div className={style.row}>
                <InputControl label="Start Date" type="date" placeholder="Enter start date" />
                <InputControl label="End Date" type="date" placeholder="Enter end date" />
            </div>

        </div>
    );

    const basicInfoBody = (
        <div className={style.detail}>
            <div className={style.row}>
                <InputControl label="Name" placeholder="Enter your name" />
            </div>
            <InputControl label="Title" placeholder="Enter your title eg. Frontend developer" />
            <div className={style.row}>
                <InputControl label="Linkedin Link" placeholder="Enter Linkedin profile link" />
                <InputControl label="Github Link" placeholder="Enter Github profile link" />
            </div>
            <div className={style.row}>
                <InputControl label="Email" placeholder="Enter your email" type="email" />
                <InputControl label="Phone" placeholder="Enter your phone number" type="tel" />
            </div>
        </div>
    );

    const achievementsBody = (
        <div className={style.detail}>
            <div className={style.column}>
                <label>List Your Achievements</label>
                <InputControl placeholder="Line 1" />
                <InputControl placeholder="Line 2" />
                <InputControl placeholder="Line 3" />
            </div>
        </div>
    );

    const summaryBody = (
        <div className={style.detail}>
            <InputControl label="Summary" placeholder="Enter your Objective / Summary" />
        </div>
    );

    const otherBody = (
        <div className={style.detail}>
            <InputControl label="Other" placeholder="Enter your Other details" />
        </div>
    );

    const generateBody = () => {
        switch (sections[activeSecKey]) {
            case sections.basicInfo: return basicInfoBody;
            case sections.workExp: return workExBody;
            case sections.project: return projectBody;
            case sections.education: return educationBody;
            case sections.achievements: return achievementsBody;
            case sections.summary: return summaryBody;
            case sections.other: return otherBody;
            default: return null;
        }
    };

    useEffect(() => {
        setActiveInfo(information[sections[sections[activeSecKey]]])
    }, [activeSecKey, information, sections])


    return (
        <div className={style.container}>
            <div className={style.header}>
                {Object.keys(sections)?.map((key) => (
                    <div className={`${style.section} ${activeSecKey === key ? style.active : ""}`}
                        onClick={() => setActiveSecKey(key)}
                    >
                        {sections[key]}
                    </div>
                ))}
            </div>
            <div className={style.body}>
                <InputControl label="Title" placeholder="Enter Section title" />
                <div className={style.chips}>
                    {
                        activeInfo?.details 
                        ? activeInfo?.details?.map((item, index) => (
                                <div className={style.chip} key={item.title+index}>
                                    <p>{sections[activeSecKey]} {index+1}</p>
                                    <XCircle id={style.close} />
                                </div>
                            ))
                     : ""}

                    <div className={style.chip}>
                        <p>Project 1</p>
                        <XCircle id={style.close} />
                    </div>
                </div>
                {generateBody()}
            </div>
        </div>
    )
}

export default Editor