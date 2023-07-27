import styles from "./calculator.module.css";
import { useSpots } from "./SpotsProvider";

export default function Data(){
    const {spots, changeSpots} = useSpots();
    console.log(spots);
    return(
        <div className={styles.mesurements}>
            <form>
                <label htmlFor="male">Male</label>
                <input type="radio" id="male" name="sex"/>
                <label htmlFor="female">Female</label>
                <input type="radio" id="female" name="sex"/>
                <div>
                    <label htmlFor="age">Your age</label>
                    <input name="age" id="age" type="number" onChange={(e) => changeSpots({...spots, age: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="pectoral">Pectoral</label>
                    <input name="pectoral" id="pectoral" type="number" onChange={(e) => changeSpots({...spots, pectoral: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="abdomen">Abdomen</label>
                    <input name="abdomen" id="abdomen" type="number" onChange={(e) => changeSpots({...spots, abdomen: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="quadricep">Quadricep</label>
                    <input name="quadricep" id="quadricep" type="number" onChange={(e) => changeSpots({...spots, quadricep: e.target.value})}/>
                </div>
            </form>
        </div>
    );
}