import React from 'react';
import home from '../home/Home.module.scss';
import contacts from '../contacts/Contacts.module.scss';
import app from '../../App.module.scss';
import about from '../about/About.module.scss';
import portfolio from './Portfolio.module.scss'
import {JackInTheBox} from 'react-awesome-reveal';
import bgPhotoText from '../../images/portfolio1.png';

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
            href: 'https://cards-for-learn-git-dev-morozovaan.vercel.app/log-in',
            title: 'Cards'
        },
        {
            href: 'https://karolinaesepenok.github.io/cards/#/packs',
            title: 'Study cards'
        },
        {
            href: '',
            title: 'Other project 2'
        }
    ]

    const bgText = {
        backgroundImage: `url(${bgPhotoText})`
    }

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
                    <ul className={portfolio.list} style={bgText}>
                        {portfolioArr}
                    </ul>
                </div>
            </div>
        </>
    );
};
