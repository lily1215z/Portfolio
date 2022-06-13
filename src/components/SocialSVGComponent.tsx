import React from 'react';
import home from "./home/Home.module.css";
import {SocialNetworkSvgSelector} from "./iconSVG/SocialNetworkSVGSelector";

export const SocialSvgComponent = () => {
    return (
        <ul className={home.list_icon}>
            <li><SocialNetworkSvgSelector icon={'facebook'}/></li>
            <li><SocialNetworkSvgSelector icon={'telegram'} /></li>
            <li><SocialNetworkSvgSelector icon={'linkedin'} /></li>
            <li><SocialNetworkSvgSelector icon={'whatsapp'} /></li>
            <li><SocialNetworkSvgSelector icon={'instagram'} /></li>
            <li><SocialNetworkSvgSelector icon={'viber'} /></li>
        </ul>
    );
};
