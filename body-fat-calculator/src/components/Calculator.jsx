'use client'

import styles from "./components.module.css";
import { SpotsProvider } from "./calculator/SpotsProvider";
import Data from "./calculator/Data";
import Result from "./calculator/Result";


export default function Calculator(){
    return(
        <div className={styles.calculator}>
            <h1><span>?</span>Write your plicometry mesurements</h1>
            <SpotsProvider>
                <Data />
                <Result />
            </SpotsProvider>
        </div>
    );
}