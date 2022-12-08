import React, {useEffect} from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import './App.module.css';
import app from './App.module.css'
import {Nav} from './components/nav/Nav';
import {About} from './components/about/About';
import {Home} from './components/home/Home';
import {Portfolio} from './components/portfolio/Portfolio';
import {Skills} from './components/skills/Skills';
import {Contacts} from './components/contacts/Contacts';
import btn_back from '../src/images/btn_back.png'
import {Particle} from './components/common/Particles';
import {Hinge} from 'react-awesome-reveal';

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const goBack = () => navigate(-1)

    useEffect(() => {           // Scroll to top if path changes
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <div className={app.particle}>
                <Particle />
            </div>

            <div className={app.wrapper}>
                <Hinge>
                    <h1 className={app.wrapper_hide}></h1>
                    {/*<h1 className={app.title}>Mysliatska Svitlana</h1>*/}
                </Hinge>

                <a href="#" onClick={goBack} className={app.btn_back}>
                    <img src={btn_back} alt={'btn back'}/>
                </a>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="skills" element={<Skills/>}/>
                    <Route path="portfolio" element={<Portfolio/>}/>
                    <Route path="contacts" element={<Contacts/>}/>
                    <Route path="*" element={<div>Page not found</div>}/>
                </Routes>
            </div>
        </>

    );
}

export default App;
