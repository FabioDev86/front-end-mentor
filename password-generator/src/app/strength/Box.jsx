import styles from "./box.module.css";

// I'm not happy with this solution. I've to find a smarter way. 

export default function Box(props){
    if(props.position === "first"){
        if(props.strength === "Weak"){
            return <div className={styles.weak}></div>            
        } else if(props.strength === "Medium"){
            return <div className={styles.medium}></div>
        }
        else if(props.strength === "Strong"){
            return <div className={styles.strong}></div>
        }else return <div>_</div>;
    }
    if(props.position === "second"){         
        if(props.strength === "Medium"){
            return <div className={styles.medium}></div>
        }
        else if(props.strength === "Strong"){
            return <div className={styles.strong}></div>
        }else return <div></div>;
    }
    if(props.position === "third"){
        if(props.strength === "Strong"){
            return <div className={styles.strong}></div>            
        } 
        else return <div></div>
    }
}