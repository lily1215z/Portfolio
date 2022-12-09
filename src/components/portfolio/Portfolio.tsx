import React from 'react';
import home from '../home/Home.module.scss';
import contacts from '../contacts/Contacts.module.scss';
import app from '../../App.module.scss';
import about from '../about/About.module.scss';
import portfolio from './Portfolio.module.scss'
import {JackInTheBox} from 'react-awesome-reveal';

export const Portfolio = () => {
    const portfolioData = [
        {
            href: 'https://lily1215z.github.io/completeTodolist/',
            title: 'TodoList'
        },
        {
            href: 'https://lily1215z.github.io/samuray_TypeScript/',
            title: 'Social Network'
        },
        {
            href: 'http://i9574282.beget.tech',
            title: 'Robin.W'
        },
        {
            href: 'https://lily1215z.github.io/completeTodolist/',
            title: 'Other project'
        },
        {
            href: 'https://lily1215z.github.io/samuray_TypeScript/',
            title: 'Other project 2'
        },
        {
            href: 'http://i9574282.beget.tech',
            title: 'Other project 3'
        }
    ]

    const portfolioArr = portfolioData.map(i=> {
        return <li className={portfolio.item}>
            <a className={portfolio.link} href={i.href}
               target={'_blank'}>{i.title}</a>
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
