import styles from "./strength.module.css";

// I'm not happy with this solution. I've to find a smarter way. 

export default function Box(props){
    if(props.position === "first"){
        if(props.strength === "Weak"){
            return <div className={styles.weak}>_</div>            
        } else if(props.strength === "Medium"){
            return <div className={styles.medium}>_</div>
        }
        else if(props.strength === "Strong"){
            return <div className={styles.strong}>_</div>
        }else return <div>_</div>;
    }
    if(props.position === "second"){         
        if(props.strength === "Medium"){
            return <div className={styles.medium}>_</div>
        }
        else if(props.strength === "Strong"){
            return <div className={styles.strong}>_</div>
        }else return <div>_</div>;
    }
    if(props.position === "third"){
        if(props.strength === "Strong"){
            return <div className={styles.strong}>_</div>            
        } 
        else return <div>_</div>
    }
}