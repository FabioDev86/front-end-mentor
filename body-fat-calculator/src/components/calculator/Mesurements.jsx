import styles from "./calculator.module.css";
import { useSpots } from "./SpotsProvider";

export default function Mesurements(){
    const {spots, changeSpots} = useSpots();
    return(
        <div className={styles.mesurements}>
            <form>
                <div>
                    <label htmlFor="pectoral">Pectoral</label>
                    <input name="pectoral" type="number" onChange={(value) => changeSpots({...spots, pectoral: value})}/>
                </div>
                <div>
                    <label htmlFor="abdomen">Abdomen</label>
                    <input name="abdomen" type="number" onChange={(value) => changeSpots({...spots, abdomen: value})}/>
                </div>
                <div>
                    <label htmlFor="quadricep">Quadricep</label>
                    <input name="quadricep" type="number" onChange={(value) => changeSpots({...spots, quadricep: value})}/>
                </div>
            </form>
        </div>
    );
}