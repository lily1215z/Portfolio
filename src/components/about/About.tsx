import React from 'react';
import about from './About.module.css'
import my_photo_about from '../../images/my_photo_about1.jpg'
import home from "../home/Home.module.css";
import app from "../../App.module.css";
import {SocialSvgComponent} from "../SocialSVGComponent";

export const About = () => {
    return (
        <>
            <div className={home.wrapper}>
                <div className={home.block_img}>
                    <img
                        className={about.img}
                        width={'200px'}
                        src={my_photo_about}
                    />
                </div>
                <div className={about.wrapper}>
                    <span className={`${home.text} ${about.text}`}>My intro</span>
                    <h2 className={`${app.title} ${about.title}`}>About<span className={about.style_text}> Me</span>
                    </h2>
                    <div>
                        <span className={about.name}>Who Am <span className={about.style_text}> I ?</span></span>
                        <h3 className={about.name}>I'm Mysliatska Svitlana, A <span className={about.style_text}>Front-End Developer</span>
                        </h3>
                        <p className={home.text}>
                            I completed a wonderful React course at the IT-Incubator. In this course, I mastered such
                            tools as React, TypeScript, Redux, JS, HTML5 & CSS3, JavaScript, AXIOS, Git, Thunk, Rest API,
                            Redux ToolKit. Ready for new challenges. I am Ukrainian, from the wonderful city of Odessa.
                            But at the moment I live in Malaga, Spain. I have a work permit. Open to your suggestions.
                        </p>
                        <div>
                            <h3 className={about.name}>Personal <span className={about.style_text}>Informations</span>
                            </h3>
                            <div className={about.box}>
                                <ul className={about.list}>
                                    <li className={home.text}>First Name : <span
                                        className={about.style_text_white}>Mysliatska</span></li>
                                    <li className={home.text}>Last Name : <span
                                        className={about.style_text_white}>Svitlana</span></li>
                                    <li className={home.text}>Address : <span className={about.style_text_white}>Calle Marmoles, 28. 29007</span>
                                    </li>
                                    <li className={home.text}>From : <span className={about.style_text_white}>Malaga, Spain</span>
                                    </li>
                                </ul>
                                <ul className={about.list}>
                                    <li className={home.text}>E-Mail : <span
                                        className={about.style_text}>svtlnlily@gmail.com</span></li>
                                    <li className={home.text}>Phone : <span className={about.style_text}>(+34) 624-89-10-54</span>
                                    </li>
                                    <li className={home.text}>Age : <span
                                        className={about.style_text_white}>28 years</span></li>
                                    <li className={home.text}>Languages : <span className={about.style_text_white}>English, Ukrainian, Russian, Spain</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={about.social}>
                                {<SocialSvgComponent />}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className={about.block}>
                    <span className={home.text}>Check Out My Resume</span>
                    <h3 className={app.title}>My <span className={about.style_text}>Resume</span>
                    </h3>
                </div>
                <div className={about.block_resume}>
                    <div>
                        <div className={about.box_educ}>
                            <h4 className={about.title_educ}>Education</h4>
                            <div className={`${about.style_text} ${about.title_educ_bulit}`}>Christian
                                humanitarian-economic open university
                            </div>
                            <span
                                className={about.style_text_white}>Speciality: organization  management / 2013 – 2016</span>
                            <div className={`${about.style_text} ${about.title_educ_bulit}`}>Odessa state colledge
                                economics and management of trade
                            </div>
                            <span className={about.style_text_white}>Speciality:  merchandiser and commercial activities / 2011 – 2013</span>
                        </div>
                        <ul className={about.box_educ}>
                            <li className={about.title_educ}>Additional education</li>
                            <li className={`${about.style_text} ${about.title_educ_bulit}`}>Advertising design, Adobe
                                Photoshop in 'Design Class' / 2016
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
                            <li className={`${about.style_text} ${about.title_educ_bulit}`}>It-Incubator / 2022 - now</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={`${about.title_educ} ${about.experience}`}>Experience</h4>
                        <div className={about.box_educ}>
                            <div className={`${about.style_text} ${about.title_educ_bulit}`}>Social Network</div>
                            <div className={about.style_text_white}>Jan 2022 - in progress</div>
                            <p className={home.text}>
                                Used technologies: React/Redux/TypeScript/Redux-thunk/React-router-dom
                                v6/React-hook-form/Axios/Jest; Social network app with using react hooks, routing, lazy
                                loading, working with REST api, login/logout flow, pagination, form and validation/file
                                uploading using unit-tests for code workability check.
                            </p>
                        </div>
                        <div className={about.box_educ}>
                            <div className={`${about.style_text} ${about.title_educ_bulit}`}>Todolist</div>
                            <div className={about.style_text_white}>Jan 2022 - Apr 2022</div>
                            <p className={home.text}>
                                Used technologies: React/Redux/Redux-Toolkit/React-router-dom v6/ Jest(Unit-Tests) /Storybook/Axios /Formik/Material UI; Todolist app created with react hooks, routing and redirects, material UI, REST api request/response flow, unit-tests and etc.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
};

