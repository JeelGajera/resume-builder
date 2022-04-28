import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { Mail, Phone, Linkedin, GitHub, Calendar, MapPin, Link, Bookmark } from 'react-feather';
import style from "./Resume.module.css"

const Resume = forwardRef((props, ref) => {

  const information = props.information;
  const sections = props.sections;

  const containerRef = useRef();

  const info = {
    basicInfo: information[sections.basicInfo],
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievements: information[sections.achievements],
    education: information[sections.education],
    summary: information[sections.summary],
    other: information[sections.other],
  };

  const getDates = (value) => {
    if (!value) return "";
    const date = new Date(value);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const [column, setColumn] = useState([[], []]);

  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");

  const sectionPart = {
    [sections.workExp]: (
      <div key={"work"}
        draggable
        onDragOver={() => setTarget(info.workExp?.id)}
        onDragEnd={() => setSource(info.workExp?.id)}
        className={`${style.workExp} ${info.workExp?.sectionTitle ? "" : style.hidden} ${style.section}`}>
        <div className={style.secTitle}>{info.workExp?.sectionTitle}</div>
        <div className={style.content}>
          {
            info.workExp?.details?.map((item) => (
              <div className={style.item} key={item.title}>
                {
                  item.title ?
                    <p className={style.title}>{item.title}</p> : <span />
                }
                {
                  item.companyName ?
                    <p className={style.subTitle}>{item.companyName}</p> : <span />
                }
                {
                  item.startDate && item.endDate ? (
                    <div className={style.date}>
                      <Calendar />{getDates(item.startDate)} - {getDates(item.endDate)}
                    </div>
                  ) : (
                    <div />
                  )
                }
                {
                  item.location ? (
                    <div className={style.location}>
                      <MapPin />{item.location}
                    </div>
                  ) : <span />
                }
                {
                  item.certificationLink ? (
                    <a className={style.link}>
                      <Link />{item.certificationLink}
                    </a>
                  ) : <span />
                }
                {
                  item.points?.length > 0 ? (
                    <ul className={style.points}>
                      {item.points?.map((elem, index) => (
                        <li className={style.point} key={elem + index}>
                          {elem}
                        </li>
                      ))}
                    </ul>
                  ) : <span />
                }
              </div>
            ))
          }
        </div>
      </div>
    ),
    [sections.project]: (
      <div key={"project"}
        draggable
        onDragOver={() => setTarget(info.project?.id)}
        onDragEnd={() => setSource(info.project?.id)}
        className={`${style.project} ${info.project?.sectionTitle ? "" : style.hidden} ${style.section}`}>
        <div className={style.secTitle}>{info.project?.sectionTitle}</div>
        <div className={style.content}>
          {
            info.project?.details?.map((item) => (
              <div className={style.item} key={item.title}>
                {
                  item.title ?
                    <p className={style.title}>{item.title}</p> : <span />
                }
                {
                  item.overview ?
                    <p className={style.overview}>{item.overview}</p> : <span />
                }
                {
                  item.deployeLink ? (
                    <a className={`${style.link} ${style.deployeLink}`}>
                      <Link />{item.deployeLink}
                    </a>
                  ) : <span />
                }
                {
                  item.githubLink ? (
                    <a className={`${style.link} ${style.githubLink}`}>
                      <GitHub />{item.githubLink}
                    </a>
                  ) : <span />
                }
                {
                  item.points?.length > 0 ? (
                    <ul className={style.points}>
                      {item.points?.map((elem, index) => (
                        <li className={style.point} key={elem + index}>
                          {elem}
                        </li>
                      ))}
                    </ul>
                  ) : <span />
                }
              </div>
            ))
          }
        </div>
      </div>
    ),
    [sections.education]: (
      <div key={"education"}
        draggable
        onDragOver={() => setTarget(info.education?.id)}
        onDragEnd={() => setSource(info.education?.id)}
        className={`${style.education} ${info.education?.sectionTitle ? "" : style.hidden} ${style.section}`}>
        <div className={style.secTitle}>{info.education?.sectionTitle}</div>
        <div className={style.content}>
          {
            info.education?.details?.map((item) => (
              <div className={style.item} key={item.title}>
                {
                  item.title ?
                    <p className={style.title}>{item.title}</p> : <span />
                }
                {
                  item.collegeName ? (
                    <div className={style.clgName}>
                      <Bookmark />{item.collegeName}
                    </div>
                  ) : <span />
                }
                {
                  item.startDate && item.endDate ? (
                    <div className={style.date}>
                      <Calendar />{getDates(item.startDate)} - {getDates(item.endDate)}
                    </div>
                  ) : (
                    <div />
                  )
                }
              </div>
            ))
          }
        </div>
      </div>
    ),
    [sections.achievements]: (
      <div key={"achievement"}
        draggable
        onDragOver={() => setTarget(info.achievements?.id)}
        onDragEnd={() => setSource(info.achievements?.id)}
        className={`${style.achievement} ${info.achievements?.sectionTitle ? "" : style.hidden} ${style.section}`}>
        <div className={style.secTitle}>{info.achievements?.sectionTitle}</div>
        <div className={style.content}>
          {
            info.achievements?.points?.length > 0 ? (
              <ul className={style.points}>
                {info.achievements?.points?.map((elem, index) => (
                  <li className={style.point} key={elem + index}>
                    {elem}
                  </li>
                ))}
              </ul>
            ) : <span />
          }
        </div>
      </div>
    ),
    [sections.summary]: (
      <div key={"summary"}
        draggable
        onDragOver={() => setTarget(info.summary?.id)}
        onDragEnd={() => setSource(info.summary?.id)}
        className={`${style.summary} ${info.summary?.sectionTitle ? "" : style.hidden} ${style.section}`}>
        <div className={style.secTitle}>{info.summary?.sectionTitle}</div>
        <p className={style.overview}>{info.summary?.detail}</p>
      </div>
    ),
    [sections.other]: (
      <div key={"other"}
        draggable
        onDragOver={() => setTarget(info.other?.id)}
        onDragEnd={() => setSource(info.other?.id)}
        className={`${style.other} ${info.other?.sectionTitle ? "" : style.hidden} ${style.section}`}>
        <div className={style.secTitle}>{info.other?.sectionTitle}</div>
        <p className={style.overview}>{info.other?.detail}</p>
      </div>
    ),
  };

  const swapSourceTarget = (source, target) => {
    if (!source || !target) return;
    const tempC = [[...column[0]], [...column[1]]];

    let sourceRowIndex = tempC[0].findIndex((i) => i === source);
    let sourceColIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColIndex = 1;
      sourceRowIndex = tempC[1].findIndex((i) => i === source);
    };

    let targetRowIndex = tempC[0].findIndex((i) => i === target);
    let targetColIndex = 0;
    if (targetRowIndex < 0) {
      targetColIndex = 1;
      targetRowIndex = tempC[1].findIndex((i) => i === target);
    };

    const tempS = tempC[sourceColIndex][sourceRowIndex];
    tempC[sourceColIndex][sourceRowIndex] = tempC[targetColIndex][targetRowIndex];
    tempC[targetColIndex][targetRowIndex] = tempS

    setColumn(tempC);
  };

  useEffect(() => {
    setColumn([
      [sections.workExp, sections.achievements, sections.summary],
      [sections.project, sections.education, sections.other],
    ]);
  }, [])

  useEffect(() => {
    swapSourceTarget(source, target);
  }, [source])

  useEffect(() => {
    const container = containerRef.current;
    if (!props.activeColor || !container) return;
    container.style.setProperty("--color", props.activeColor);
  }, [props.activeColor])

  // console.log(info.basicInfo.detail.profile)
  return (
    <div ref={ref}>
      <div ref={containerRef} className={style.container}>
        <div className={style.hero}>
          <div className={style.header}>
            <p className={style.heading}>{info.basicInfo?.detail?.name}</p>
            <p className={style.subHeading}>{info.basicInfo?.detail?.title}</p>
            <div className={style.links}>
              {
                info.basicInfo?.detail?.address ? (
                  <div className={style.link}>
                    <MapPin /> {info.basicInfo?.detail?.address}
                  </div>
                ) : <span />
              }
              {
                info.basicInfo?.detail?.dob ? (
                  <div className={style.link}>
                    <Calendar /> {getDates(info.basicInfo?.detail?.dob)}
                  </div>
                ) : <span />
              }
            </div>
            <div className={style.links}>
              {
                info.basicInfo?.detail?.email ? (
                  <a className={style.link} type="email">
                    <Mail /> {info.basicInfo?.detail?.email}
                  </a>
                ) : <span />
              }
              {
                info.basicInfo?.detail?.phone ? (
                  <a className={style.link}>
                    <Phone /> {info.basicInfo?.detail?.phone}
                  </a>
                ) : <span />
              }
              {
                info.basicInfo?.detail?.linkedin ? (
                  <a className={style.link}>
                    <Linkedin /> {info.basicInfo?.detail?.linkedin}
                  </a>
                ) : <span />
              }
              {
                info.basicInfo?.detail?.github ? (
                  <a className={style.link}>
                    <GitHub /> {info.basicInfo?.detail?.github}
                  </a>
                ) : <span />
              }
            </div>
          </div>
          <div className={style.profile}>
            {
              info.basicInfo?.detail?.profile ? (
                <img src={info.basicInfo?.detail?.profile} alt="Resume-Profile" />
              ) : <span />
            }
          </div>
        </div>

        <div className={style.main}>
          <div className={style.col1}>{
            column[0].map(i => sectionPart[i])
          }</div>
          <div className={style.col2}>{
            column[1].map(i => sectionPart[i])
          }</div>
        </div>
      </div>
    </div>
  )
});

export default Resume;