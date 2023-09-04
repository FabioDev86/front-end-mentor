'use client';

import styles from "./slider.module.css"

export default function Slider(props){
    
    return(
        <div className={styles.container}>
            <label className={styles.label} htmlFor="myRange">Character Length: <span>{props.state}</span></label>
            <input className={styles.slider} type="range" min="1" max="30" value={props.state} onChange={(e) => {props.setState(e.target.value)}} id="myRange"></input>
        </div>
    );
}