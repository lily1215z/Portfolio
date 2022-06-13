import React from 'react';
import home from "./home/Home.module.css";
import app from "../App.module.css";

type ButtonUniversalTypeProps = {
    title: string
}

export const ButtonUniversal = (props: ButtonUniversalTypeProps) => {
    return (
        <>
            <a className={home.btn_link}>
                <button className={app.button}>{props.title}</button>
            </a>
        </>
    );
};
