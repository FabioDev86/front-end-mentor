import styles from "./calculator.module.css";

export default function Mesurements(){
    return(
        <div className={styles.mesurements}>
            <form>
                <label htmlFor="pectoral">Pectoral</label>
                <input name="pectoral" type="number"/>
                <label htmlFor="abdomen">Abdomen</label>
                <input name="abdomen" type="number"/>
                <label htmlFor="quadriceps">Quadriceps</label>
                <input name="quadriceps" type="number"/>
            </form>
        </div>
    );
}