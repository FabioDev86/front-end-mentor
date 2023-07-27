import styles from "./calculator.module.css";
import { useSpots } from "./SpotsProvider";

export default function Mesurements(){
    const {spots, changeSpots} = useSpots();
    console.log(spots);
    return(
        <div className={styles.mesurements}>
            <form>
                <div>
                    <label htmlFor="age">Your age</label>
                    <input name="age" type="number" onChange={(e) => changeSpots({...spots, age: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="pectoral">Pectoral</label>
                    <input name="pectoral" type="number" onChange={(e) => changeSpots({...spots, pectoral: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="abdomen">Abdomen</label>
                    <input name="abdomen" type="number" onChange={(e) => changeSpots({...spots, abdomen: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="quadricep">Quadricep</label>
                    <input name="quadricep" type="number" onChange={(e) => changeSpots({...spots, quadricep: e.target.value})}/>
                </div>
            </form>
        </div>
    );
}