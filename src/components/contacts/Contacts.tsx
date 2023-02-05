import React, {useRef, useState} from 'react';
import home from '../home/Home.module.scss';
import app from '../../App.module.scss';
import about from '../about/About.module.scss';
import contacts from './Contacts.module.scss'
import {ButtonUniversal} from '../ButtonUniversal';
import {SocialSvgComponent} from '../SocialSVGComponent';
import emailjs from '@emailjs/browser';
import {JackInTheBox} from 'react-awesome-reveal';

export const Contacts = () => {
    const [modalSuccess, setModalSuccess] = useState(false);
    const [modalError, setModalError] = useState(false);
    const [regex, setRegex] = useState('')

    const form: any = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_4rckvrl', 'template_alqt1da', form.current, '5P2r9ws9F8l4LYYq8')
            .then((result) => {
                setModalSuccess(true)
            }, (error) => {
                setModalError(true)
            });
        e.target.reset()
    };

    setTimeout(() => {
        setModalSuccess(false)
        setModalError(false)
    }, 4000);

    return (
        <>
            {modalSuccess && <div className={contacts.modal_success}>{'Your message has been successfully sent!'}</div>}
            {modalError && <div className={contacts.modal_error}>{'something went wrong. :(('}</div>}
            <div className={contacts.title_box}>
                <span className={home.text}>Feel Free To Contact Me Anytimes</span>
                <JackInTheBox>
                    <h2 className={`${app.title} ${contacts.title}`}>My<span className={about.style_text}> Contacts</span>
                    </h2>
                </JackInTheBox>

            </div>
            <div className={contacts.block}>
                <div className={contacts.contact_me}>
                    <h3 className={contacts.subtitle}>Contact Me</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className={contacts.inner}>
                            <input
                                name={'name'}
                                className={`${contacts.input} ${contacts.input_size}`}
                                placeholder={'Name'}
                                required/>
                            {/*{ /\w+@\w+\.\w+/.test(regex) ? 'error' : '' }*/}
                            <input
                                type='email'
                                name={'email'}
                                className={`${contacts.input} ${contacts.input_size}`}
                                onChange={(e) => setRegex(e.currentTarget.value)}
                                value={regex}
                                placeholder={'Email'}
                                required/>
                        </div>
                        <input
                            name={'subject'}
                            className={`${contacts.input} ${contacts.message}`}
                            placeholder={'Subject'}
                            required/>
                        <textarea
                            name={'message'}
                            className={contacts.text}
                            placeholder={'Message'}
                            required></textarea>
                        <div className={contacts.btn}>
                            <ButtonUniversal title={'Send Message'} href={'???'}/>
                        </div>
                    </form>
                </div>

                <div className={contacts.contact_info}>
                    <h3 className={contacts.subtitle}>Contact Info</h3>
                    <p className={home.text}>
                        Always available for communication. Do not hesitate to contact me!
                    </p>
                    <ul className={contacts.list}>
                        <li className={`${contacts.item} ${contacts.item_name}`}>
                            <div className={contacts.title_color}>Name</div>
                            <div className={about.style_text}>Mysliatska Svitlana</div>
                        </li>
                        <li className={`${contacts.item} ${contacts.item_location}`}>
                            <div className={contacts.title_color}>Location</div>
                            <div className={about.style_text}>13002, Calle Antonio Blazquez, Ciudad Real, Spain</div>
                        </li>
                        <li className={`${contacts.item} ${contacts.item_relocation}`}>
                            <div className={contacts.title_color}>Relocation in</div>
                            <div className={about.style_text}>Barcelona, Spain</div>
                        </li>
                        <li className={`${contacts.item} ${contacts.item_call}`}>
                            <div className={contacts.title_color}>Call Me</div>
                            <div className={about.style_text}>+34 624 89 10 54</div>
                        </li>
                        <li className={`${contacts.item} ${contacts.item_email}`}>
                            <div className={contacts.title_color}>Email Me</div>
                            <div className={about.style_text}>svtlnlily@gmail.com</div>
                        </li>
                    </ul>
                    <div className={about.social}>
                        <SocialSvgComponent/>
                    </div>

                </div>
            </div>
        </>
    );
};

