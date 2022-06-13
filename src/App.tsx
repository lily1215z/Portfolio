import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.module.css';
import app from './App.module.css'
import {Nav} from "./components/nav/Nav";
import {About} from "./components/about/About";
import {Home} from "./components/home/Home";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Skills} from "./components/skills/Skills";
import {Contacts} from "./components/contacts/Contacts";

function App() {
    return (
        <div className={app.wrapper}>
            <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='skills' element={<Skills />} />
                    <Route path='portfolio' element={<Portfolio />} />
                    <Route path='contacts' element={<Contacts />} />
                </Routes>
        </div>
    );
}

export default App;
