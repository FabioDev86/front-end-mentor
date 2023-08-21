'use client'

import styles from './page.module.css';
import GeneratedPassword from '@/components/GeneratedPassword';
import Generator from '@/components/Generator';
import { useState } from 'react';

export default function Home() {
  
  const[password, setPassword] = useState("no password");
  
  return (
    <main className={styles.main}>
      <h1>Password Generator</h1>
      <GeneratedPassword password = {password} />
      <Generator setPassword = {setPassword} />
    </main>
  )
}
