import React from 'react';
import about from './About.module.scss'
import my_photo_about from '../../images/my_photo_about1.jpg'
import home from '../home/Home.module.scss';
import app from '../../App.module.scss';
import {SocialSvgComponent} from '../SocialSVGComponent';
// @ts-ignore
import cv from "./cv.pdf";
import {JackInTheBox} from 'react-awesome-reveal';
import {Resume} from './Resume';


export const About = () => {

    // const onButtonClick = () => {
    //     fetch('cv.pdf').then(response => {
    //         response.blob().then(blob => {
    //             // Creating new object of PDF file
    //             const fileURL = window.URL.createObjectURL(blob);
    //             // Setting various property values
    //             let alink = document.createElement('a');
    //             alink.href = fileURL;
    //             alink.download = 'cv.pdf';
    //             alink.click();
    //         })
    //     })
    // }

    return (
        <>
            <div className={home.wrapper}>
                <div className={home.block_img}>
                    <img
                        className={about.img}
                        width={'200px'}
                        src={my_photo_about}
                        alt={'photo aboute me'}
                    />
                </div>
                <div className={about.wrapper}>
                    <span className={`${home.text} ${about.text}`}>My intro</span>
                    <JackInTheBox>
                        <h2 className={`${app.title} ${about.title}`}>About<span className={about.style_text}> Me</span></h2>
                    </JackInTheBox>

                    <div>
                        <span className={about.name}>Who Am <span className={about.style_text}> I ?</span></span>
                        <h3 className={about.name}>I'm Mysliatska Svitlana, A <span className={about.style_text}>Front-End Developer</span>
                        </h3>
                        <p className={home.text}>
                            I completed a wonderful React course at the IT-Incubator. In this course, I mastered such
                            tools as React, TypeScript, Redux, JS, HTML5 & CSS3, JavaScript, AXIOS, Git, Thunk, Rest
                            API,
                            Redux ToolKit. Ready for new challenges. I am Ukrainian, from the wonderful city of Odessa.
                            But at the moment I live in Ciudad Real, Spain. I have a work permit. Open to your suggestions.
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
                                    {/*<li className={home.text}>Address : <span className={about.style_text_white}>Calle A.Blazquez, 4. 13002</span>*/}
                                    {/*</li>*/}
                                    <li className={home.text}>From : <span className={about.style_text_white}>Ciudad Real, Spain</span>
                                    </li>
                                </ul>
                                <ul className={about.list}>
                                    <li className={home.text}>E-Mail : <span
                                        className={about.style_text}>svtlnlily@gmail.com</span></li>
                                    <li className={home.text}>Phone : <span className={about.style_text}>(+34) 624-89-10-54</span>
                                    </li>
                                    {/*<li className={home.text}>Age : <span*/}
                                    {/*    className={about.style_text_white}>38 years</span></li>*/}
                                    <li className={home.text}>Languages : <span className={about.style_text_white}>English, Ukrainian, Russian, Spain</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={about.social}>
                                {<SocialSvgComponent/>}
                            </div>
                            {/*<button onClick={onButtonClick}>Download my CV*/}
                            {/*    /!*<a href={cv} download="lana_cv">Download my CV</a>*!/*/}
                            {/*</button>*/}
                            <div className={about.download}>
                                <a className={about.download_link} href={cv} download="lana_cv">Download my CV</a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <Resume />
        </>

    );
};

