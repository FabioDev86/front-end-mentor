'use client'

import styles from "./components.module.css";
import MailForm from "./MailForm";

export default function Newsletter(){
    return(
        <div className={styles.newsletter}>
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
                <li key="1">Product discovery and building what matters</li>
                <li key="2">Measuring to ensure updates are a success</li>
                <li key="3">And much more!</li>
            </ul>
            <MailForm />
        </div>
    );
}