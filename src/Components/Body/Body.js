import React, { useState } from 'react';
import { Download } from 'react-feather';
import Editor from '../Editor/Editor.js';
import style from "./Body.module.css";

function Body() {
    const colors = ["#001524", "#ff7d00", "#A89C94FF", "#00203FFF", "#E94B3CFF", "#00539CFF"];

    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievements: "Achievements",
        summary: "Summary",
        other: "Other"
    };

    const [resumeInfo, setResumeInfo] = useState({
        [sections.basicInfo]: {
            id: sections.basicInfo,
            title: sections.basicInfo,
            details: {},
        },
        [sections.workExp]: {
            id: sections.workExp,
            title: sections.workExp,
            details: [],
        },
        [sections.project]: {
            id: sections.project,
            title: sections.project,
            details: [],
        },
        [sections.education]: {
            id: sections.education,
            title: sections.education,
            details: [],
        },
        [sections.achievements]: {
            id: sections.achievements,
            title: sections.achievements,
            points: [],
        },
        [sections.summary]: {
            id: sections.summary,
            title: sections.summary,
            details: "",
        },
        [sections.other] : {
            id: sections.other,
            title: sections.other,
            details: "",
        },
    });

    return (
        <div className={style.container}>
            <p className={style.heading}>
                Resume Builder
            </p>
            <div className={style.toolbar}>
                <div className={style.colors}>
                    {colors.map((item) => (
                        <span
                            key={item}
                            style={{ backgroundColor: item }}
                            className={style.color}
                        />
                    ))}
                </div>
                <button className={style.downloadbtn}>
                    <span>Download! <Download />
                    </span>
                </button>
            </div>
            <div className={style.main}>
                <Editor sections={sections}  information={resumeInfo} />
            </div>
        </div>
    )
}

export default Body