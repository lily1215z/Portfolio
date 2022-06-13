import React from 'react';
import home from "../home/Home.module.css";
import contacts from "../contacts/Contacts.module.css";
import app from "../../App.module.css";
import about from "../about/About.module.css";
import portfolio from './Portfolio.module.css'

export const Portfolio = () => {
    return (
        <>
        <div className={portfolio.wrapper}>
            <div className={contacts.title_box}>
                <span className={home.text}>Showcasing Some Of My Work</span>
                <h2 className={`${app.title} ${contacts.title}`}>My<span className={about.style_text}> Portfolio</span>
                </h2>
            </div>
            <div>
                <ul className={portfolio.list}>
                    <li className={portfolio.item}>
                        <a className={portfolio.link} href={'#'}>TodoList</a>
                    </li>
                    <li className={portfolio.item}>
                        <a className={portfolio.link} href={'#'}>Social Network</a>
                    </li>
                    <li className={portfolio.item}>
                        <a className={portfolio.link} href={'#'}>Other Project</a>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
};
