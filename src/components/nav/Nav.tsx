import React from 'react';
import nav from './Nav.module.css'
import home from "../home/Home.module.css";
import {NavSvgSelector} from "../iconSVG/NavSVGSelector";
import {NavLink} from 'react-router-dom';

export const Nav = () => {
    // const navLinkStypes = ({isActive}): any => {
    //     return {
    //         borderColor: isActive ? 'red' : 'blue',
    //         border: isActive ? '1px' : '2px'
    //     }
    // }
    // const location = useLocation()
                                        //fill dont worky
    const color = {
        color: '#ff651c'
    }

    return (
        <nav className={nav.inner}>
            <ul className={nav.list}>
                <li className={nav.item}>
                    <span className={nav.text_hover}>Home</span>
                    <NavLink to='/' style={({isActive}) => ({stroke: isActive ? color.color : ''})}>
                        {/*<NavLink to='/' className={({ isActive }) =>isActive ? " active-link" : ""}>*/}
                        <div className={home.svg}>
                            <NavSvgSelector icon={'house'}/>
                        </div>
                    </NavLink>
                </li>
                <li className={nav.item}>
                    <span className={nav.text_hover}>About</span>
                    <NavLink to='/about' style={({isActive}) => ({stroke: isActive ? color.color : ''})}>
                        <div className={home.svg}>
                            <NavSvgSelector icon={'about'}/>
                        </div>
                    </NavLink>
                </li>
                <li className={nav.item}>
                    <span className={nav.text_hover}>Skills</span>
                    <NavLink to='/skills' style={({isActive}) => ({stroke: isActive ? color.color : ''})}>
                        <div className={home.svg}>
                            <NavSvgSelector icon={'skills'}/>
                        </div>
                    </NavLink>
                </li>
                <li className={nav.item}>
                    <span className={nav.text_hover}>Portfolio</span>
                    <NavLink to='/portfolio' style={({isActive}) => ({stroke: isActive ? color.color : ''})}>
                        <div className={home.svg}>
                            <NavSvgSelector icon={'portfolio'}/>
                        </div>
                    </NavLink>
                </li>
                <li className={nav.item}>
                    <span className={nav.text_hover}>Contacts</span>
                    <NavLink to='/contacts' style={({isActive}) => ({stroke: isActive ? color.color : ''})}>
                        <div className={home.svg}>
                            <NavSvgSelector icon={'contacts'}/>
                        </div>
                    </NavLink>
                </li>
            </ul>

        </nav>
    );
};

