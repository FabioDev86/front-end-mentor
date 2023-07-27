'use client'

import styles from "./components.module.css";
import { SpotsProvider } from "./calculator/SpotsProvider";
import Mesurements from "./calculator/Mesurements";
import Result from "./calculator/Result";


export default function Calculator(){
    return(
        <div className={styles.calculator}>
            <h1><span>?</span>Write your plicometry mesurements</h1>
            <SpotsProvider>
                <Mesurements />
                <Result />
            </SpotsProvider>
        </div>
    );
}