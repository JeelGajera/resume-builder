import React, { useState, useEffect } from 'react';
import InputControl from "../InputControl/InputControl";
import { XCircle, Save, PlusCircle } from "react-feather";
import style from "./Editor.module.css";

function Editor(props) {
    const sections = props.sections;

    const information = props.information;

    const [activeSecKey, setActiveSecKey] = useState(Object.keys(sections)[0]);

    const [activeInfo, setActiveInfo] = useState(
        information[sections[Object.keys(sections)[0]]]
    );

    const [sectionTitle, setSectionTitle] = useState(sections[Object.keys(sections)[0]]);

    const [activeDetailIndex, setActiveDetailIndex] = useState(0);

    const [values, setVelues] = useState({
        name: activeInfo.detail?.name || "",
        title: activeInfo.detail?.title || "",
        linkedin: activeInfo.detail?.linkedin || "",
        github: activeInfo.detail?.github || "",
        phone: activeInfo.detail?.phone || "",
        profile: activeInfo.detail?.profile || "",
        email: activeInfo.detail?.email || "",
    });

    const [imgProfile, setImgProfile] = useState();
    

    const handlePointUpdate = (value, index) => {
        const tempVal = { ...values };
        if (!Array.isArray(tempVal.points)) tempVal.points = [];
        tempVal.points[index] = value;
        setVelues(tempVal);
    }

    // Body components of editor part
    const basicInfoBody = (
        <div className={style.detail}>
            <div className={style.row}>
                <InputControl label="Name" placeholder="Enter your name" value={values.name}
                    onChange={(event) =>
                        setVelues((prev) => ({ ...prev, name: event.target.value }))
                    }
                />
            </div>
            <InputControl label="Title" placeholder="Enter your title eg. Frontend developer" value={values.title}
                onChange={(event) =>
                    setVelues((prev) => ({ ...prev, title: event.target.value }))
                } />
            <InputControl label="Address" placeholder="Enter your address" value={values.address}
                onChange={(event) =>
                    setVelues((prev) => ({ ...prev, address: event.target.value }))
                } />
            <div className={style.row}>
                <InputControl label="Date Of Birth" type="date" placeholder="Enter DOB" value={values.dob}
                    onChange={(event) =>
                        setVelues((prev) => ({ ...prev, dob: event.target.value }))
                    } />
                <InputControl label="Profile Picture" type="file" accept="image/*" placeholder="Select Image"
                    onChange={(event) => 
                        setImgProfile(() => (URL.createObjectURL(event.target.files[0])))
                    }
                />
            </div>
            <div className={style.row}>
                <InputControl label="Linkedin Link" placeholder="Enter Linkedin profile link" value={values.linkedin}
                    onChange={(event) =>
                        setVelues((prev) => ({ ...prev, linkedin: event.target.value }))
                    } />
                <InputControl label="Github Link" placeholder="Enter Github profile link" value={values.github}
                    onChange={(event) =>
                        setVelues((prev) => ({ ...prev, github: event.target.value }))
                    } />
            </div>
            <div className={style.row}>
                <InputControl label="Email" placeholder="Enter your email" value={values.email} type="email"
                    onChange={(event) =>
                        setVelues((prev) => ({ ...prev, email: event.target.value }))
                    } />
                <InputControl label="Phone" placeholder="Enter your phone number" value={values.phone} type="tel"
                    onChange={(event) =>
                        setVelues((prev) => ({ ...prev, phone: event.target.value }))
                    } />
            </div>
        </div>
    );

    const workExBody = (
        <div className={style.detail}>
            <div className={style.row}>
                <InputControl label="Company Name" value={values.companyName} placeholder="Enter Company name eg. ISRO"
                    onChange={(event) =>
                        setVelues((prev) => ({ ...prev, companyName: event.target.value }))
                    } />
            </div>
            <InputControl label="Title" value={values.title} placeholder="Enter Title eg. Frontend Developer"
                onChange={(event) =>
                    setVelues((prev) => ({ ...prev, title: event.target.value }))
                } />
            <div className={style.row}>
                <InputControl label="Certificate Link" value={values.certificationLink} placeholder="Enter Certificate link"
                    onChange={(event) =>
                        setVelues((prev) => ({ ...prev, certificationLink: event.target.value }))
                    } />
                <InputControl label="Location" value={values.location} placeholder="Enter location eg. Remote"
                    onChange={(event) =>
                        setVelues((prev) => ({ ...prev, location: event.target.value }))
                    } />
            </div>
            <div className={style.row}>
                <InputControl label="Start Date" value={values.startDate} type="date" placeholder="Enter start date of work"
                    onChange={(event) =>
                        setVelues((prev) => ({ ...prev, startDate: event.target.value }))
                    } />
                <InputControl label="End Date" value={values.endDate} type="date" placeholder="Enter end date of work"
                    onChange={(event) =>
                        setVelues((prev) => ({ ...prev, endDate: event.target.value }))
                    } />
            </div>
            <div className={style.column}>
                <label>Enter Work Description</label>
                <InputControl placeholder="Line 1" value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)} />
                <InputControl placeholder="Line 2" value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)} />
                <InputControl placeholder="Line 3" value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)} />
            </div>
        </div>
    );

    const projectBody = (
        <div className={style.detail}>
            <div className={style.row}>
                <InputControl label="Title" placeholder="Enter title eg. Chap Application" value={values.title}
                    onChange={(event) =>
                        setVelues((prev) => ({ ...prev, title: event.target.value }))
                    } />
            </div>
            <InputControl label="Overview" placeholder="Enter basic overview of project" value={values.overview}
                onChange={(event) =>
                    setVelues((prev) => ({ ...prev, overview: event.target.value }))
                } />
            <div className={style.row}>
                <InputControl label="Deployed Link" placeholder="Enter Deployed link of project" value={values.deployLink}
                    onChange={(event) =>
                        setVelues((prev) => ({ ...prev, deployLink: event.target.value }))
                    } />
                <InputControl label="Github Link" placeholder="Enter Github link of project" value={values.githubLink}
                    onChange={(event) =>
                        setVelues((prev) => ({ ...prev, githubLink: event.target.value }))
                    } />
            </div>
            <div className={style.column}>
                <label>Enter Project Description</label>
                <InputControl placeholder="Line 1" value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)} />
                <InputControl placeholder="Line 2" value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)} />
                <InputControl placeholder="Line 3" value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)} />
            </div>
        </div>
    );

    const educationBody = (
        <div className={style.detail}>
            <div className={style.row}>
                <InputControl label="Title" placeholder="Enter title eg. B.Tech" value={values.title}
                    onChange={(event) =>
                        setVelues((prev) => ({ ...prev, title: event.target.value }))
                    } />
                <InputControl label="College/School Name" placeholder="Enter name of colege/school" value={values.collegeName}
                    onChange={(event) =>
                        setVelues((prev) => ({ ...prev, collegeName: event.target.value }))
                    } />
            </div>
            <div className={style.row}>
                <InputControl label="Start Date" type="date" placeholder="Enter start date" value={values.startDate}
                    onChange={(event) =>
                        setVelues((prev) => ({ ...prev, startDate: event.target.value }))
                    } />
                <InputControl label="End Date" type="date" placeholder="Enter end date" value={values.endDate}
                    onChange={(event) =>
                        setVelues((prev) => ({ ...prev, endDate: event.target.value }))
                    } />
            </div>

        </div>
    );

    const achievementsBody = (
        <div className={style.detail}>
            <div className={style.column}>
                <label>List Your Achievements</label>
                <InputControl placeholder="Line 1" value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)} />
                <InputControl placeholder="Line 2" value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)} />
                <InputControl placeholder="Line 3" value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)} />
            </div>
        </div>
    );

    const summaryBody = (
        <div className={style.detail}>
            <InputControl label="Summary" placeholder="Enter your Objective / Summary" value={values.summary}
                onChange={(event) =>
                    setVelues((prev) => ({ ...prev, summary: event.target.value }))
                } />
        </div>
    );

    const otherBody = (
        <div className={style.detail}>
            <InputControl label="Other" placeholder="Enter your Other details" value={values.other}
                onChange={(event) =>
                    setVelues((prev) => ({ ...prev, other: event.target.value }))
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

    // update details & save datails in setResumeInfo --> body
    const handleSubmission = () => {
        switch (sections[activeSecKey]) {
            case sections.basicInfo: {
                const tempDetail = {
                    name: values.name,
                    title: values.title,
                    address: values.address,
                    profile: imgProfile,
                    dob: values.dob,
                    linkedin: values.linkedin,
                    github: values.github,
                    email: values.email,
                    phone: values.phone,
                };
                props.setInformation((prev) => ({
                    ...prev,
                    [sections.basicInfo]: {
                        ...prev[sections.basicInfo],
                        detail: tempDetail,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.workExp: {
                const tempDetail = {
                    companyName: values.companyName,
                    title: values.title,
                    certificationLink: values.certificationLink,
                    location: values.location,
                    startDate: values.startDate,
                    endDate: values.endDate,
                    points: values.points,
                };

                const tempDetails = [...information[sections.workExp]?.details];
                tempDetails[activeDetailIndex] = tempDetail;

                props.setInformation((prev) => ({
                    ...prev,
                    [sections.workExp]: {
                        ...prev[sections.workExp],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.project: {
                const tempDetail = {
                    title: values.title,
                    overview: values.overview,
                    deployLink: values.deployLink,
                    githubLink: values.githubLink,
                    points: values.points,
                };

                const tempDetails = [...information[sections.project]?.details];
                tempDetails[activeDetailIndex] = tempDetail;

                props.setInformation((prev) => ({
                    ...prev,
                    [sections.project]: {
                        ...prev[sections.project],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.education: {
                const tempDetail = {
                    title: values.title,
                    collegeName: values.collegeName,
                    startDate: values.startDate,
                    endDate: values.endDate,
                };

                const tempDetails = [...information[sections.education]?.details];
                tempDetails[activeDetailIndex] = tempDetail;

                props.setInformation((prev) => ({
                    ...prev,
                    [sections.education]: {
                        ...prev[sections.education],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.achievements: {
                const tempPoints = values.points;

                props.setInformation((prev) => ({
                    ...prev,
                    [sections.achievements]: {
                        ...prev[sections.achievements],
                        points: tempPoints,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.summary: {
                const tempDetail = values.summary;

                props.setInformation((prev) => ({
                    ...prev,
                    [sections.summary]: {
                        ...prev[sections.summary],
                        detail: tempDetail,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.other: {
                const tempDetail = values.other;

                props.setInformation((prev) => ({
                    ...prev,
                    [sections.other]: {
                        ...prev[sections.other],
                        detail: tempDetail,
                        sectionTitle,
                    },
                }));
                break;
            }
            // default: return null;
        }
    };

    const handleAddChip = () => {
        const details = activeInfo?.details
        const lastDetail = details.slice(-1)[0];
        if (!details || !Object.keys(lastDetail).length) return;
        details?.push({});
        props.setInformation((prev) => ({
            ...prev,
            [sections[activeSecKey]]: {
                ...information[sections[activeSecKey]],
                details: details,
            },
        }));
        setActiveDetailIndex(details?.length - 1);
    };

    const handleRemoveChip = (index) => {
        const details = activeInfo?.details ? [...activeInfo?.details] : "";
        if (!details) return;
        details.splice(index, 1);
        props.setInformation((prev) => ({
            ...prev,
            [sections[activeSecKey]]: {
                ...information[sections[activeSecKey]],
                details: details,
            },
        }));
        setActiveDetailIndex((prev) => (prev === index ? prev - 1 : 0));
    };

    useEffect(() => {
        const activeInfo = information[sections[activeSecKey]];
        setActiveInfo(activeInfo);
        setSectionTitle(sections[activeSecKey]);
        setActiveDetailIndex(0);
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
            address: activeInfo.detail?.address || "",
            dob: activeInfo.detail?.dob || "",
            profile: activeInfo.detail?.profile || "",
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

    useEffect(() => {
        setActiveInfo(information[sections[activeSecKey]])
    }, [information])

    //Multi Value Sections
    useEffect(() => {
        const details = activeInfo?.details
        if (!details) return;
        setVelues({
            overview: activeInfo.details[activeDetailIndex]?.overview || "",
            certificationLink: activeInfo.details[activeDetailIndex]?.certificationLink || "",
            companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
            location: activeInfo.details[activeDetailIndex]?.location || "",
            startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
            endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
            points: activeInfo.details[activeDetailIndex]?.points || "",
            title: activeInfo.details[activeDetailIndex]?.title || "",
            linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
            github: activeInfo.details[activeDetailIndex]?.github || "",
            deployLink: activeInfo.details[activeDetailIndex]?.deployLink || "",
            githubLink: activeInfo.details[activeDetailIndex]?.githubLink || "",
            collegeName: activeInfo.details[activeDetailIndex]?.collegeName || "",
        });
    }, [activeDetailIndex]);

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
                                className={`${style.chip} ${activeDetailIndex === index ? style.active_chip : ""}`}
                                key={item.title}
                                onClick={() => setActiveDetailIndex(index)}
                            >
                                <p>
                                    {sections[activeSecKey]} {index + 1}
                                </p>
                                <XCircle className={style.chip_btn} onClick={(event) => {
                                    event.stopPropagation();
                                    handleRemoveChip(index)
                                }} />
                            </div>
                        ))
                        : ""}
                    {activeInfo?.details?.length > 0 ? (
                        <div className={style.chip}><p>Add</p><PlusCircle className={style.chip_btn} onClick={handleAddChip} /></div>
                    ) : ""}

                </div>
                {generateBody()}
                <div className={style.savebtn}>
                    <button className={style.save} onClick={handleSubmission}><p>Save</p><Save /></button>
                </div>
                {/* <img src={imgProfile} alt="profile" height="100px" width="100px"/> */}
            </div>
        </div>
    )
}

export default Editor;