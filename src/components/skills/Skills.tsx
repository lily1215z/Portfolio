import React from 'react';
import skills from './Skills.module.css'
import home from "../home/Home.module.css";
import about from "../about/About.module.css";
import app from "../../App.module.css";

export const Skills = () => {
    const arr = [
        ['JavaScript', '60'],
        ['React', '50'],
        ['React-router-domV6', '75'],
        ['Redux', '60'],
        ['TypeScript', '50'],
        ['Rest API', '40'],
        ['Unit Test', '55'],
        ['GIT', '60'],
        ['БЭМ', '85'],
        ['HTML5', '85'],
        ['CSS3', '75'],
        ['SCSS', '80'],
        ['Avocode', '90'],
        ['Photoshop', '80'],
        ['Figma', '80'],
        ['ECMA Script(es6)', '70'],
        ['Storybook', '60'],
        ['Redux ToolKit', '50'],
        ['Rest API', '50'],
        ['Thunk', '60'],
        ['AXIOS', '60']
    ]
    let res = arr.map((t, i) => {
            return (
                <div key={i} className={skills.block_bar}>
                    <div className={skills.title}>{t[0]}</div>
                    <div className={skills.progressbar}>
                        <span style={{width: `${t[1]}%`}} className={skills.span}></span>
                        <span style={{left: `${t[1]}%`}} className={skills.percent}>{t[1]}%</span>
                    </div>
                </div>
            )
    })

    return (
        <>
            <div className={skills.wrapper}>
                <div className={skills.title_skills}>
                    <span className={`${home.text}`}>My Level Of Knowledge In Some Tools</span>
                    <h2 className={`${app.title} ${about.title}`}>My<span className={about.style_text}> Skills</span>
                    </h2>
                </div>

                <div className={skills.block}>
                    {res}
                </div>
            </div>
        </>
    );
};

