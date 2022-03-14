import React from 'react';
import "./Header.css";
import resumeSvg from "../../Assets/resume.svg";

function Header() {
    return (
        <div className="hcontainer">
            <div className="himage">
                <img src={resumeSvg} alt="Resume-Img"/>
            </div>
            <div className="hdescription">
                <p className="hheading">
                    A <span>Resume</span> That Represents You!
                </p>
                <p className="hheading">
                    Make Your Own Resume. <span>It's Free...</span>
                </p>
            </div>
        </div>
    )
}

export default Header