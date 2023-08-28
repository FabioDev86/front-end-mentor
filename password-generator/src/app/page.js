'use client'

import { useRouter } from 'next/navigation';

import styles from './page.module.css';

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1>Welcome!</h1>
      <button onClick={() => router.push("/generator")}>GENERATE A PASSWORD</button>
      <br></br>
      <button onClick={() => router.push("/evaluator")}>EVALUATE A PASSWORD</button>
    </main>
  )
}
