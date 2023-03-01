import React from 'react';
import skills from './Skills.module.scss'
import home from '../home/Home.module.scss';
import about from '../about/About.module.scss';
import app from '../../App.module.scss';
import {JackInTheBox} from 'react-awesome-reveal';

export const Skills = () => {
    const skillsArr = [
        ['JavaScript', '60'],
        ['ECMA Script(es6)', '70'],
        ['TypeScript', '70'],
        ['React', '75'],
        ['React-router-domV6', '75'],
        ['Redux', '75'],
        ['Thunk', '80'],
        ['Redux ToolKit', '70'],
        ['Rest API', '50'],
        ['AXIOS', '60'],
        ['GIT', '80'],
        ['БЭМ', '85'],
        ['HTML5', '85'],
        ['CSS3', '75'],
        ['SCSS', '80'],
        ['Avocode', '90'],
        ['Photoshop', '80'],
        ['Figma', '80'],
        ['Jira', '85'],
    ]

    const mySkills = skillsArr.map((t, i) => {
        return (
            <div key={i} className={skills.block_bar}>
                <div className={skills.title}>{t[0]}</div>
                <div className={skills.progressbar}>
                    <span style={{width: `${t[1]}%`}} className={skills.progress_line}></span>
                    <span style={{left: `${t[1]}%`}} className={skills.percent}>{t[1]}%</span>
                </div>
            </div>
        )
    })

    return (
        <>
            <div className={skills.title_skills}>
                <span className={`${home.text}`}>My Level Of Knowledge In Some Tools</span>
                <JackInTheBox>
                    <h2 className={`${app.title} ${about.title}`}>My<span className={about.style_text}> Skills</span>
                    </h2>
                </JackInTheBox>

            </div>

            <div className={skills.block}>
                {mySkills}
            </div>
        </>
    );
};

