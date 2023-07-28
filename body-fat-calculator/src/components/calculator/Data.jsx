import styles from "./calculator.module.css";
import { useData } from "./DataProvider";

export default function Data(){
    const {data, changeData} = useData();
    return(
        <div className={styles.mesurements}>
            <form>
                <label htmlFor="male">Male</label>
                <input type="radio" id="male" name="sex" value="m" onChange={(e) => changeData({...data, sex: e.target.value})}/>
                <label htmlFor="female">Female</label>
                <input type="radio" id="female" name="sex" value="f" onChange={(e) => changeData({...data, sex: e.target.value})}/>
                <div>
                    <label htmlFor="age">Your age</label>
                    <input name="age" id="age" type="number" onChange={(e) => changeData({...data, age: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="spot1">{data.sex === "m" ? "Pectoral" : "Tricep"}</label>
                    <input name="spot1" id="spot1" type="number" onChange={(e) => changeData({...data, spot1: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="spot2">{data.sex === "m" ? "Abdomen" : "Suprailiac"}</label>
                    <input name="spot2" id="spot2" type="number" onChange={(e) => changeData({...data, spot2: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="spot3">Thigh</label>
                    <input name="spot3" id="spot3" type="number" onChange={(e) => changeData({...data, spot3: e.target.value})}/>
                </div>
            </form>
        </div>
    );
}