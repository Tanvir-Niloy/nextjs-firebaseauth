import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'


function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="next firebase crud" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Login</h1>
      </main>

     
    </div>
  )
}

export default Login