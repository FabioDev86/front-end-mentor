'use client'

import GeneratedPassword from './components/GeneratedPassword';
import Generator from './components/Generator';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./page.module.css"



export default function Home() {
  
  const[password, setPassword] = useState("no password");
  const router = useRouter();
  
  return (
    <main className={styles.main}> 
      <h1 className={styles.title}>Password Generator</h1>
      <div className={styles.container}> 
        <GeneratedPassword password = {password} />
        <Generator setPassword = {setPassword} />
        <button onClick={() => {router.push("/")}}>Back to Home</button>
      </div>
    </main>
  )
}
