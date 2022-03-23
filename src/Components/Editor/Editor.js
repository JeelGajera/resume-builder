import React, { useState, useEffect } from 'react';
import InputControl from "../InputControl/InputControl.js";
import { XCircle, Save } from "react-feather";
import style from "./Editor.module.css";

function Editor(props) {
    const sections = props.sections;

    const information = props.information;

    const setInformation = props.setInformation;

    const [activeSecKey, setActiveSecKey] = useState(Object.keys(sections)[0]);

    const [activeInfo, setActiveInfo] = useState(
        information[sections[Object.keys(sections)[0]]]
    );

    const [sectionTitle, setSectionTitle] = useState(sections[Object.keys(sections)[0]]);

    const [values, setVelues] = useState({
        name: activeInfo.detail?.name || "",
        title: activeInfo.detail?.title || "",
        linkedin: activeInfo.detail?.linkedin || "",
        github: activeInfo.detail?.github || "",
        phone: activeInfo.detail?.phone || "",
        email: activeInfo.detail?.email || "",
    });

    const handlePointUpdate = (value, index) => {
        const tempVal = {...values};
        tempVal.points[index] = value;
        setVelues(tempVal);
    }

    const basicInfoBody = (
        <div className={style.detail}>
            <div className={style.row}>
                <InputControl label="Name" placeholder="Enter your name" defaultValue={values.name}
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, name: event.target.value}))
                    }
                />
            </div>
            <InputControl label="Title" placeholder="Enter your title eg. Frontend developer" defaultValue={values.title}
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, title: event.target.value}))
                    } />
            <div className={style.row}>
                <InputControl label="Linkedin Link" placeholder="Enter Linkedin profile link" defaultValue={values.linkedin}
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, linkedin: event.target.value}))
                    } />
                <InputControl label="Github Link" placeholder="Enter Github profile link" defaultValue={values.github}
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, github: event.target.value}))
                    } />
            </div>
            <div className={style.row}>
                <InputControl label="Email" placeholder="Enter your email" defaultValue={values.email} type="email"
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, email: event.target.value}))
                    } />
                <InputControl label="Phone" placeholder="Enter your phone number" defaultValue={values.phone} type="tel"
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, phone: event.target.value}))
                    } />
            </div>
        </div>
    );
    
    const workExBody = (
        <div className={style.detail}>
            <div className={style.row}>
                <InputControl label="Company Name" defaultValue={values.companyName} placeholder="Enter Company name eg. ISRO"
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, companyName: event.target.value}))
                    } />
            </div>
            <InputControl label="Title" defaultValue={values.title} placeholder="Enter Title eg. Frontend Developer"
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, title: event.target.value}))
                    } />
            <div className={style.row}>
                <InputControl label="Certificate Link" defaultValue={values.certificationLink} placeholder="Enter Certificate link"
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, certificationLink: event.target.value}))
                    } />
                <InputControl label="Location" defaultValue={values.location} placeholder="Enter location eg. Remote"
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, location: event.target.value}))
                    } />
            </div>
            <div className={style.row}>
                <InputControl label="Start Date" defaultValue={values.startDate} type="date" placeholder="Enter start date of work"
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, startDate: event.target.value}))
                    } />
                <InputControl label="End Date" defaultValue={values.endDate} type="date" placeholder="Enter end date of work"
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, endDate: event.target.value}))
                    } />
            </div>
            <div className={style.column}>
                <label>Enter Work Description</label>
                <InputControl placeholder="Line 1" defaultValue={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)} />
                <InputControl placeholder="Line 2" defaultValue={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)} />
                <InputControl placeholder="Line 3" defaultValue={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)} />
            </div>
        </div>
    );

    const projectBody = (
        <div className={style.detail}>
            <div className={style.row}>
                <InputControl label="Title" placeholder="Enter title eg. Chap Application" defaultValue={values.title}
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, title: event.target.value}))
                    } />
            </div>
            <InputControl label="Overview" placeholder="Enter basic overview of project" defaultValue={values.overview}
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, overview: event.target.value}))
                    } />
            <div className={style.row}>
                <InputControl label="Deployed Link" placeholder="Enter Deployed link of project" defaultValue={values.deployLink}
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, deployLink: event.target.value}))
                    } />
                <InputControl label="Github Link" placeholder="Enter Github link of project" defaultValue={values.githubLink}
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, githubLink: event.target.value}))
                    } />
            </div>
            <div className={style.column}>
                <label>Enter Project Description</label>
                <InputControl placeholder="Line 1" defaultValue={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)} />
                <InputControl placeholder="Line 2" defaultValue={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)} />
                <InputControl placeholder="Line 3" defaultValue={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)} />
            </div>
        </div>
    );

    const educationBody = (
        <div className={style.detail}>
            <div className={style.row}>
                <InputControl label="Title" placeholder="Enter title eg. B.Tech" defaultValue={values.title}
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, title: event.target.value}))
                    } />
                <InputControl label="College/School Name" placeholder="Enter name of colege/school" defaultValue={values.collegeName}
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, collegeName: event.target.value}))
                    } />
            </div>
            <div className={style.row}>
                <InputControl label="Start Date" type="date" placeholder="Enter start date" defaultValue={values.startDate}
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, startDate: event.target.value}))
                    } />
                <InputControl label="End Date" type="date" placeholder="Enter end date" defaultValue={values.endDate}
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, endDate: event.target.value}))
                    } />
            </div>

        </div>
    );

    const achievementsBody = (
        <div className={style.detail}>
            <div className={style.column}>
                <label>List Your Achievements</label>
                <InputControl placeholder="Line 1" defaultValue={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)} />
                <InputControl placeholder="Line 2" defaultValue={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)} />
                <InputControl placeholder="Line 3" defaultValue={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)} />
            </div>
        </div>
    );

    const summaryBody = (
        <div className={style.detail}>
            <InputControl label="Summary" placeholder="Enter your Objective / Summary" defaultValue={values.summary}
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, summary: event.target.value}))
                    } />
        </div>
    );

    const otherBody = (
        <div className={style.detail}>
            <InputControl label="Other" placeholder="Enter your Other details" defaultValue={values.other}
                    onChange={(event) => 
                        setVelues((prev) => ({ ...prev, other: event.target.value}))
                    } />
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

    const handleSubmission = () => {
        console.log(values);
    };

    useEffect(() => {
        const activeInfo = information[sections[activeSecKey]]
        setActiveInfo(activeInfo)
        setSectionTitle(sections[activeSecKey])
        setVelues({
            name: activeInfo.detail?.name || "",
            title: activeInfo?.details 
                ? activeInfo.details[0]?.title || ""
                : activeInfo?.detail?.title || "",
            linkedin: activeInfo.detail?.linkedin || "",
            github: activeInfo.detail?.github || "",
            phone: activeInfo.detail?.phone || "",
            email: activeInfo.detail?.email || "",
            companyName: activeInfo.detail?.companyName || "",
            certificationLink: activeInfo.details 
                ? activeInfo.details[0]?.certificationLink || ""
                : "",
            location: activeInfo.detail?.location || "",
            startDate: activeInfo.details 
                ? activeInfo.details[0]?.startDate || ""
                : "",
            endDate: activeInfo.details 
                ? activeInfo.details[0]?.endDate || ""
                : "",
            points: activeInfo.details 
                ? activeInfo.details[0]?.points 
                    ? [...activeInfo.details[0]?.points]
                    : ""
                : activeInfo.points 
                    ? [...activeInfo.points]
                    : "",
            overview: activeInfo.details 
                ? activeInfo.details[0]?.overview || ""
                : "",
            deployLink: activeInfo.details 
                ? activeInfo.details[0]?.deployLink || ""
                : "",
            githubLink: activeInfo.details 
                ? activeInfo.details[0]?.githubLink || ""
                : "",
            collegeName: activeInfo.detail?.collegeName || "",
            summary: activeInfo.detail?.summary || "",
            other: activeInfo.detail?.other || "",
        })
    }, [activeSecKey])
    console.log(sections[activeSecKey]);
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
                <InputControl 
                    label="Section Title" 
                    placeholder="Enter Section title"
                    value={sectionTitle} 
                    onChange={(e) => setSectionTitle(e.target.value)}
                />
                <div className={style.chips}>
                    {activeInfo?.details
                        ? activeInfo?.details.map((item, index) => (
                            <div
                                className={style.chip}
                                key={item.title}
                            >
                                <p>
                                    {sections[activeSecKey]} {index + 1}
                                </p>
                                <XCircle className={style.close}/>
                            </div>
                        ))
                        : ""}

                </div>
                {generateBody()}
                <div className={style.savebtn}>
                <button className={style.save} onClick={handleSubmission()}>Save<Save/></button>
                </div>
            </div>
        </div>
    )
}

export default Editor