import React from 'react';
import home from "./home/Home.module.scss";
import app from "../App.module.scss";

type ButtonUniversalTypeProps = {
    title: string
    href: string
}

export const ButtonUniversal = (props: ButtonUniversalTypeProps) => {
    return (
        <>
            <a className={home.btn_link} href={props.href} target={"_blank"}>
                <button className={app.button}>{props.title}</button>
            </a>
        </>
    );
};
