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
        <Generator password = {password} setPassword = {setPassword} />
        <button onClick={() => {router.push("/")}}>Back to Home</button>
      </div>
      <div className={styles.iconlink}>
        <a target="_blank" href="https://icons8.com/icon/59773/copy">Copy</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
      </div>
    </main>
  )
}
