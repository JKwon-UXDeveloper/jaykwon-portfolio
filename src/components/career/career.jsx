import React from "react";
import './career.css'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import {IoMdSchool} from 'react-icons/io'
import {MdMilitaryTech} from 'react-icons/md'
import {MdWork} from 'react-icons/md'

function Career() {
    return (
        <section id='career'>
            <h5>What I Have experienced</h5>
            <h2>My Career</h2>
            <div className="container career__container">
                <VerticalTimeline lineColor="#00ADB5">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#393E46'}}
                    contentArrowStyle={{ borderRight: '7px solid #393E46' }}
                    date="2005 - 2008"
                    iconStyle={{ background: "#FEC260", color: "#393E46" }}
                    icon={<IoMdSchool />}
                    color="#393E46"
                >
                    <h3 className="vertical-timeline-element-title">
                    JungSan High School, Gangnam-gu, Seoul
                    </h3>
                    {/* <p> High School Diploma</p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#393E46'}}
                    contentArrowStyle={{ borderRight: '7px solid #393E46' }}
                    date="2009 - 2015"
                    iconStyle={{ background: "#FEC260", color: "#393E46" }}
                    icon={<IoMdSchool />}
             >
                    <h3 className="vertical-timeline-element-title">
                    UNIST, Ulju-gun, Ulsan
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                    Bachelor's Degree
                    </h4>
                    <p> Computer Science </p>
                    <p> Techno Management </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--military"
                    contentStyle={{ background: '#393E46'}}
                    contentArrowStyle={{ borderRight: '7px solid #393E46' }}
                    date="2010 - 2012"
                    iconStyle={{ background: "#a10035", color: "#393E46" }}
                    icon={<MdMilitaryTech />}
             >
                    <h3 className="vertical-timeline-element-title">
                    5th Infantry Division, Yeoncheon-gun, Gyeonggi-do
                    </h3>
                    <p> Computer Science Branch </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#393E46'}}
                    contentArrowStyle={{ borderRight: '7px solid #393E46' }}
                    date="2015 - 2021"
                    iconStyle={{ background: "#3FA796", color: "#393E46" }}
                    icon={<MdWork />}
             >
                    <h3 className="vertical-timeline-element-title">
                    Research Engineer - Hyundai Motors R&D
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                    Hwaseong-si, Gyeonggi-do
                    </h4>
                    <p>Navigation Development (2015 - 2017)</p> 
                    <p>Infotainment SW Developoment (2017 - 2019)</p>
                    <p>Infotainment UX Development (2019 - 2021)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#393E46'}}
                    contentArrowStyle={{ borderRight: '7px solid #393E46' }}
                    date="2020 - 2022"
                    iconStyle={{ background: "#FEC260", color: "#393E46" }}
                    icon={<IoMdSchool />}
             >
                    <h3 className="vertical-timeline-element-title">
                    Seoul National University, Gwanak-gu, Seoul
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                    Master's Degree
                    </h4>
                    <p> Cognitive Science - "Improvement of Data Governance for applying Data-Driven Design focused on Mobility UX Design"</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#393E46'}}
                    contentArrowStyle={{ borderRight: '7px solid #393E46' }}
                    date="2022 - present"
                    iconStyle={{ background: "#3FA796", color: "#393E46" }}
                    icon={<MdWork />}
             >
                    <h3 className="vertical-timeline-element-title">
                    Senior Research Engineer - Hyundai Motors R&D
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                    Gangnam-gu, Seoul
                    </h4>
                    <p>Infotainment UX Development (2022 - present)</p>
                </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
    );
  }
  
  export default Career;