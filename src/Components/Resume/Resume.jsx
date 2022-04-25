import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, GitHub, Calendar, MapPin, Link, Bookmark } from 'react-feather';
import style from "./Resume.module.css"

function Resume(props) {

  const [column, setColumn] = useState([[], []]);

  const workExpSec = (
    <div key={"work"} className={`${style.workExp} ${style.section}`}>
      <div className={style.secTitle}>Work Experience</div>
      <div className={style.content}>
        <div className={style.item}>
          <p className={style.title}>Full Stack Developer</p>
          <p className={style.subTitle}>Company Name</p>
          <div className={style.date}>
            <Calendar />12/07/2323 - 02/23/2323
          </div>
          <div className={style.location}>
            <MapPin /> Banglore
          </div>
          <a className={style.link}>
            <Link />htpps://err.ertert.rtwe/werre
          </a>
          <ul className={style.points}>
            <li className={style.point}>this is point 1.</li>
            <li className={style.point}>this is point 2.</li>
            <li className={style.point}>this is point 3.</li>
          </ul>
        </div>
      </div>
    </div>
  );
  const projectSec = (
    <div key={"project"} className={`${style.project} ${style.section}`}>
      <div className={style.secTitle}>Projects</div>
      <div className={style.content}>
        <div className={style.item}>
          <p className={style.title}>Chat Bot</p>
          <p className={style.overview}>this is a very usefull project in automation.</p>
          <a className={`${style.link} ${style.deployeLink}`}>
            <Link />htpps://err.ertert.rtwe/werre
          </a>
          <a className={`${style.link} ${style.githubLink}`}>
            <GitHub />htpps://err.ertert.rtwe/werre
          </a>
          <ul className={style.points}>
            <li className={style.point}>this is point 1.</li>
            <li className={style.point}>this is point 2.</li>
            <li className={style.point}>this is point 3.</li>
          </ul>
        </div>
      </div>
    </div>
  );
  const educationSec = (
    <div key={"education"} className={`${style.education} ${style.section}`}>
      <div className={style.secTitle}>Education</div>
      <div className={style.content}>
        <div className={style.item}>
          <p className={style.title}>B.Tech</p>
          <a className={style.clgName}>
            <Bookmark />L.D. Engineering College
          </a>
          <div className={style.date}>
            <Calendar />12/07/2323 - 02/23/2323
          </div>
        </div>
      </div>
    </div>
  );
  const achievementSec = (
    <div key={"achievement"} className={`${style.achievement} ${style.section}`}>
      <div className={style.secTitle}>Achievements</div>
      <div className={style.content}>
        <ul className={style.points}>
          <li className={style.point}>this is point 1.</li>
          <li className={style.point}>this is point 2.</li>
          <li className={style.point}>this is point 3.</li>
        </ul>
      </div>
    </div>
  );
  const summarySec = (
    <div key={"summary"} className={`${style.summary} ${style.section}`}>
      <div className={style.secTitle}>Summary</div>
      <p className={style.overview}>This is a very simple summary of this resume.</p>
    </div>
  );
  const otherSec = (
    <div key={"other"} className={`${style.other} ${style.section}`}>
      <div className={style.secTitle}>Other</div>
      <p className={style.overview}>This is a something other text of this resume.</p>
    </div>
  );

  useEffect(() => {
    setColumn([
      [workExpSec, achievementSec, summarySec],
      [projectSec, educationSec, otherSec],
    ]);
  }, [])

  return (
    <div className={style.container}>
      <div className={style.header}>
        <p className={style.heading}>jeel gajera</p>
        <p className={style.subHeading}>Blokchain Developer</p>
        <div className={style.links}>
          <a className={style.link}>
            <Mail /> Example@mail.com
          </a>
          <a className={style.link}>
            <Phone /> +912323232323
          </a>
          <a className={style.link}>
            <Linkedin /> www.linkedin.com/jeelGajera
          </a>
          <a className={style.link}>
            <GitHub />www.github.com/JeelGajera
          </a>
        </div>
      </div>
      <div className={style.main}>
        <div className={style.col1}>{column[0]}</div>
        <div className={style.col2}>{column[1]}</div>
      </div>
    </div>
  )
}

export default Resume;