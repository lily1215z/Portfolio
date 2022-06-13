import React from 'react';
import home from './Home.module.css'
import my_photo from '../../images/my_photo.jpg'
import app from '../../App.module.css'
import {SocialSvgComponent} from "../SocialSVGComponent";
import {ButtonUniversal} from "../ButtonUniversal";

export const Home = () => {
    return (
        <div className={home.wrapper}>
            <div className={home.block_img}>
                <img
                    className={home.img}
                    width={'250px'}
                    src={my_photo}/>
            </div>
            <div className={home.inner}>
                <span className={home.text}>Get To Know Me</span>
                <h1 className={app.title}>Mysliatska Svitlana</h1>
                <span className={home.job}>Web developer</span>
                <SocialSvgComponent />
                <p className={`${home.text} ${home.text_home}`}>
                    Recently,   I changed  the vector of my life. I  began to study  the Front - End developer.  It  turned out
                    to be  very  exciting. I  want to develop and this area provides such opportunities. Now I
                    am in the first stage, but I am efficient and
                    trained. I am ready to work in a team to achieve  a common goal.
                </p>
                <div>
                    <ButtonUniversal title={'Hire Me'} />
                    <ButtonUniversal title={'About Me'} />

                </div>
            </div>
        </div>

    );
};

