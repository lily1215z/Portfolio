import React from 'react';
import home from '../home/Home.module.css';
import contacts from '../contacts/Contacts.module.css';
import app from '../../App.module.css';
import about from '../about/About.module.css';
import portfolio from './Portfolio.module.css'
import {JackInTheBox} from 'react-awesome-reveal';

export const Portfolio = () => {
    const portfolioData = [
        {
            href: 'https://lily1215z.github.io/completeTodolist/',
            target: '_blank',
            title: 'TodoList'
        },
        {
            href: 'https://lily1215z.github.io/samuray_TypeScript/',
            target: '_blank',
            title: 'Social Network'
        },
        {
            href: 'http://i9574282.beget.tech',
            target: '_blank',
            title: 'Robin.W'
        }
    ]

    const portfolioArr = portfolioData.map(i=> {
        return <li className={portfolio.item}>
            <a className={portfolio.link} href={i.href}
               target={i.target}>{i.title}</a>
        </li>
    })

    return (
        <>
            <div className={portfolio.wrapper}>
                <div className={contacts.title_box}>
                    <span className={home.text}>Showcasing Some Of My Work</span>
                    <JackInTheBox>
                        <h2 className={`${app.title} ${contacts.title}`}>My<span
                            className={about.style_text}> Portfolio</span>
                        </h2>
                    </JackInTheBox>

                </div>
                <div>
                    <ul className={portfolio.list}>
                        {portfolioArr}
                    </ul>
                </div>
            </div>
        </>
    );
};
