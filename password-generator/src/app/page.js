import Image from 'next/image';
import styles from './page.module.css';
import GeneratedPassword from '@/components/GeneratedPassword';
import Generator from '@/components/Generator';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Password Generator</h1>
      <GeneratedPassword />
      <Generator />
    </main>
  )
}
