'use client'

import styles from "./components.module.css";
import { DataProvider } from "./calculator/DataProvider";
import Data from "./calculator/Data";
import Result from "./calculator/Result";


export default function Calculator(){
    return(
        <div className={styles.calculator}>
            <h1><span>?</span>Write your data</h1>
            <DataProvider>
                <Data />
                <Result />
            </DataProvider>
        </div>
    );
}