'use client'

import GeneratedPassword from './components/GeneratedPassword';
import Generator from './components/Generator';
import { useState } from 'react';

export default function Home() {
  
  const[password, setPassword] = useState("no password");
  
  return (
    <main>
      <h1>Password Generator</h1>
      <GeneratedPassword password = {password} />
      <Generator setPassword = {setPassword} />
    </main>
  )
}
