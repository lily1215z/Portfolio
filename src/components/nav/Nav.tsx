import React from 'react';
import nav from './Nav.module.scss'
import home from '../home/Home.module.scss';
import {NavSvgSelector} from '../iconSVG/NavSVGSelector';
import {NavLink} from 'react-router-dom';

export const Nav = () => {
    const color = {
        color: '#ff651c'
    }

    const navigationData = [
        {
            title: 'Home',
            icon: 'house',
        },
        {
            title: 'About',
            icon: 'about',
        },
        {
            title: 'Skills',
            icon: 'skills',
        },
        {
            title: 'Portfolio',
            icon: 'portfolio',
        },
        {
            title: 'Contacts',
            icon: 'contacts',
        },
    ]
    return (
        <nav className={nav.inner}>
            <ul className={nav.list}>

                {navigationData.map(item => {
                    return <li className={nav.item}>
                        <span className={nav.text_hover}>{item.title}</span>
                        <NavLink to="/" style={({isActive}) => ({stroke: isActive ? color.color : ''})}>
                            <div className={home.svg}>
                                <NavSvgSelector icon={item.icon}/>
                            </div>
                        </NavLink>
                    </li>
                })}

            </ul>

        </nav>
    );
};

