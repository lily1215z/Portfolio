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
                    Ambitious and motivated Front-End Developer looking for a
                    job. I prefer to work in a team, because I believe that sharing
                    ideas is the solution to any problem. By the way, it can
                    increase my professional growth. In addition, in my spare
                    time I learn English and Spanish to reach the highest level.
                </p>
                <div>
                    {/*<ButtonUniversal title={'Hire Me'} href={'contacts'} />*/}
                    {/*<ButtonUniversal title={'About Me'} href={'about'} />*/}
                    <ButtonUniversal title={'About Me'} href={'https://lily1215z.github.io/about'} />
                    <ButtonUniversal title={'Hire Me'} href={'https://lily1215z.github.io/contacts'} />

                </div>
            </div>
        </div>

    );
};

