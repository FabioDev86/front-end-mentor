import styles from "./calculator.module.css";
import { useData } from "./DataProvider";
import { useState } from "react";

export default function Result(){
    const { data } = useData();
    const [result, setResult] = useState("");
    const sum = Number(data.spot1) + Number(data.spot2) + Number(data.spot3);
    const bodyDensity = data.sex === "m" ? (1.10938 - (0.0008267  * sum ) + (0.0000016 * sum * sum) - (0.0002574 * Number(data.age))) : (1.0994921 - (0.0009929 * sum) + (0.0000023 * sum * sum) - (0.0001392 * Number(data.age)));
    
    return(
        <div className={styles.result}>
           <h1>BF: </h1>
           <h1>{result+"%"}</h1>
           <button onClick={() => {setResult(Math.ceil((495 / bodyDensity ) - 450))}}>GO!</button>
        </div>
    );
}