'use client'

import styles from "./components.module.css";
import { SpotsProvider } from "./calculator/SpotsProvider";
import Mesurements from "./calculator/Mesurements";


export default function Calculator(){
    return(
        <div className={styles.calculator}>
            <h1><span>?</span>Write your plicometry mesurments</h1>
            <SpotsProvider>
                <Mesurements />
            </SpotsProvider>
        </div>
    );
}