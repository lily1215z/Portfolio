import React from 'react';
import home from "../home/Home.module.css";
import contacts from "../contacts/Contacts.module.css";
import app from "../../App.module.css";
import about from "../about/About.module.css";
import portfolio from './Portfolio.module.css'
import {JackInTheBox} from 'react-awesome-reveal';

export const Portfolio = () => {
    return (
        <>
        <div className={portfolio.wrapper}>
            <div className={contacts.title_box}>
                <span className={home.text}>Showcasing Some Of My Work</span>
                <JackInTheBox>
                    <h2 className={`${app.title} ${contacts.title}`}>My<span className={about.style_text}> Portfolio</span>
                    </h2>
                </JackInTheBox>

            </div>
            <div>
                <ul className={portfolio.list}>
                    <li className={portfolio.item}>
                        <a className={portfolio.link} href={'https://lily1215z.github.io/completeTodolist/'} target={'_blank'}>TodoList</a>
                    </li>
                    <li className={portfolio.item}>
                        <a className={portfolio.link} href={'https://lily1215z.github.io/samuray_TypeScript/'} target={'_blank'}>Social Network</a>
                    </li>
                    <li className={portfolio.item}>
                        <a className={portfolio.link} href={'http://i9574282.beget.tech'} target={'_blank'}>Robin.W</a>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
};
