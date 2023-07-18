import styles from "./components.module.css";
import data from "./data.json";

export default function Result(){
    
    //Here I calculate the average 
    let result = 0;
    let sum = 0;
    for(let i=0; i<data.length; i++){
        sum += data[i].score;
    }
    result = parseInt(sum / data.length);

    //The component
    return (
        <div className={styles.result}>
            <h1>Your result</h1>
            <div> {result} </div>
            <h1>Great</h1>
            <p>You scored higher than 65% of the people who have taken the test</p>
        </div>
    );
}