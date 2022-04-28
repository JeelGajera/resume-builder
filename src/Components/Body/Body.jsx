import React, { useState, useEffect, useRef } from 'react';
import { AlertTriangle, Download } from 'react-feather';
import ReactToPrint from 'react-to-print';
import Editor from '../Editor/Editor';
import Resume from '../Resume/Resume';
import style from "./Body.module.css";

function Body() {

    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievements: "Achievements",
        summary: "Summary",
        other: "Other"
    };
    const defaultcolor = '#226291';
    const [activeColor, setActiveColor] = useState(defaultcolor);

    const resumeRef = useRef();

    const [resumeInfo, setResumeInfo] = useState({
        [sections.basicInfo]: {
            id: sections.basicInfo,
            sectionTitle: sections.basicInfo,
            detail: {},
        },
        [sections.workExp]: {
            id: sections.workExp,
            sectionTitle: sections.workExp,
            details: [],
        },
        [sections.project]: {
            id: sections.project,
            sectionTitle: sections.project,
            details: [],
        },
        [sections.education]: {
            id: sections.education,
            sectionTitle: sections.education,
            details: [],
        },
        [sections.achievements]: {
            id: sections.achievements,
            sectionTitle: sections.achievements,
            points: [],
        },
        [sections.summary]: {
            id: sections.summary,
            sectionTitle: sections.summary,
            detail: "",
        },
        [sections.other]: {
            id: sections.other,
            sectionTitle: sections.other,
            detail: "",
        },
    });

    useEffect(() => {
    }, [resumeInfo])

    return (
        <div className={style.container}>
            <p className={style.heading}>
                Resume Builder
            </p>
            <div className={style.toolbar}>
                <div className={style.colors}>
                    <label>Select Color:-</label>
                    <input type="color" value={activeColor} id="colorPick" name="colorPick" onChange={(e) => setActiveColor(e.target.value)} />
                </div>
                <ReactToPrint
                    trigger={() => {
                        return (
                            <button className={style.downloadbtn}>
                                <span>Download!&nbsp;<Download />
                                </span>
                            </button>
                        );
                    }}
                    content={() => resumeRef.current}
                />

            </div>
            <div className={style.main}>
                <Editor
                    sections={sections}
                    information={resumeInfo}
                    setInformation={setResumeInfo}
                />
                <Resume
                    ref={resumeRef}
                    sections={sections}
                    information={resumeInfo}
                    activeColor={activeColor}
                />
                <div className={style.userManual}>
                    <p><AlertTriangle/>We dont'n save your data in any external sources. Make sure that download your resume before Reload/Leave.</p>
                    <a href="https://github.com/JeelGajera" target="_blank">Developer Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Body