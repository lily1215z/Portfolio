import React from 'react';
import about from './About.module.scss';
import home from '../home/Home.module.scss';
import {JackInTheBox} from 'react-awesome-reveal';
import app from '../../App.module.scss';

export const Resume = () => {
    return (
        <div>
            <div className={about.block}>
                <span className={home.text}>Check Out My Resume</span>
                <JackInTheBox>
                    <h3 className={app.title}>My <span className={about.style_text}>Resume</span>
                    </h3>
                </JackInTheBox>
            </div>

            <div className={about.block_resume}>
                <div>
                    <div className={about.box_educ}>
                        <h4 className={about.title_educ}>Education</h4>

                        <div className={about.educBlock}>
                            <div className={`${about.style_text} ${about.title_educ_bulit}`}>Christian
                                humanitarian-economic open university
                            </div>
                            <span
                                className={about.style_text_white}>Speciality: organization  management / 2006 – 2009</span>
                        </div>
                        <div  className={about.educBlock}>
                            <div className={`${about.style_text} ${about.title_educ_bulit}`}>Odessa state colledge
                                economics and management of trade
                            </div>
                            <span className={about.style_text_white}>Speciality:  merchandiser and commercial activities / 2002 – 2004</span>
                        </div>
                    </div>

                    <ul className={about.box_educ}>
                        <li className={about.title_educ}>Additional education</li>
                        <li className={`${about.style_text} ${about.title_educ_bulit}`}>Advertising design, Adobe
                            Photoshop in 'Design Class' / 2011
                        </li>
                        <li className={`${about.style_text} ${about.title_educ_bulit}`}>Front End Basic in 'Hillel'
                            / 2020
                        </li>
                        <li className={`${about.style_text} ${about.title_educ_bulit}`}>Front End Basic in 'From 0
                            to 1' / 2020
                        </li>
                        <li className={`${about.style_text} ${about.title_educ_bulit}`}>Front End Pro in 'Hillel' /
                            2021
                        </li>
                        <li className={`${about.style_text} ${about.title_educ_bulit}`}>Spanish language course /
                            now
                        </li>
                        <li className={`${about.style_text} ${about.title_educ_bulit}`}>It-Incubator / 2022 - now
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className={`${about.title_educ} ${about.experience}`}>Experience</h4>

                    <div className={about.box_educ}>
                        <div className={`${about.style_text} ${about.title_educ_bulit}`}>Todolist</div>
                        <div className={about.style_text_white}>Jan 2022 - Apr 2022</div>
                        <p className={home.text}>
                            Used technologies: React/Redux/Redux/React-router-dom v6/TypeScript/Redux-thunk/uuid/
                            /Axios /Formik/React-tsparticles; Todolist app created with react hooks, routing and
                            redirects, REST api request/response flow and etc.
                        </p>
                    </div>

                    <div className={about.box_educ}>
                        <div className={`${about.style_text} ${about.title_educ_bulit}`}>Social Network</div>
                        <div className={about.style_text_white}>June 2022 - Dec 2022</div>
                        <p className={home.text}>
                            Used technologies: React/Redux/TypeScript/Redux-thunk/React-router-dom
                            v6/React-hook-form/Axios/uuid/reselect; Social network app with using react hooks, routing,
                            lazy
                            loading, working with REST api, login/logout flow, pagination, form.
                        </p>
                    </div>

                    <div className={about.box_educ}>
                        <div className={`${about.style_text} ${about.title_educ_bulit}`}>Learning cards</div>
                        <div className={about.style_text_white}>Jan 2023 - Apr 2023</div>
                        <p className={home.text}>
                            Used technologies: React/Redux/Redux-Toolkit RTK Query/TypeScript/React-router-dom v6/
                            /Storybook/Formik/CRUD operations/Material UI; Learning cards app created with react hooks, routing and
                            redirects, implements the CRUD architecture and etc. Team development.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

