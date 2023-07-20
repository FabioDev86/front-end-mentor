import styles from "./components.module.css";
import data from "./data.json";
import Score from "./Score"

export default function Summary(){
    return(
        <div className={styles.summary}>
            <h1>Summary</h1>
            {data.map((data) => {return(
                <Score cat = {data.category} sco = {data.score} ico = {data.icon} id = {data.category.toLowerCase()} />
            );})}
            <button>Continue</button>
        </div>
    );
}