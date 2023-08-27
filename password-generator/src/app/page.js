'use client'

import { useRouter } from 'next/navigation';

import styles from './page.module.css';

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1>Welcome!</h1>
      <button onClick={() => router.push("/generator")}>Generate a password</button>
      <br></br>
      <button onClick={() => router.push("/evaluator")}>Evaluate a password</button>
    </main>
  )
}
