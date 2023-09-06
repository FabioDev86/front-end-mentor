'use client';

import styles from "./checkboxes.module.css";

export default function Checkboxes(props){
    
    /*
    Remember:
    props.low[0] = is the state corresponding to lowercases in the parent
    props.low[1] = is the setState corresponding to setLowercases in the parent
    
    The same schema goes for the other props: upp, num and sym
    */

    return(
        <div className={styles.container}>
            
            <input type="checkbox" id="lowercases" name="lowercases" checked={props.low[0]} onChange={() => {props.low[1](!props.low[0])}}></input>
            <label htmlFor="lowercases">Include Lowercase Letters</label>
            <br></br>

            <input type="checkbox" id="uppercases" name="uppercases" checked={props.upp[0]}  onChange={() => {props.upp[1](!props.upp[0])}}></input>
            <label htmlFor="uppercases">Include Uppercase Letters</label>
            <br></br>

            <input type="checkbox" id="numbers" name="numbers" checked={props.num[0]}  onChange={() => {props.num[1](!props.num[0])}}></input>
            <label htmlFor="numbers">Include Numbers</label>
            <br></br>

            <input type="checkbox" id="symbols" name="symbols" checked={props.sym[0]}  onChange={() => {props.sym[1](!props.sym[0])}}></input>
            <label htmlFor="symbols">Include Symbols</label>
        </div>
    );
}