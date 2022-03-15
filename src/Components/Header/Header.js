import React from 'react';
import style from "./Header.module.css";
import resumeSvg from "../../Assets/resume.svg";

function Header() {
    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src={resumeSvg} alt="Resume-Img"/>
            </div>
            <div className={style.description}>
                <p className={style.heading}>
                    A <span>Resume</span> That Represents You!
                </p>
                <p className={style.heading}>
                    Make Your Own Resume. <span>It's Free...</span>
                </p>
            </div>
        </div>
    )
}

export default Header