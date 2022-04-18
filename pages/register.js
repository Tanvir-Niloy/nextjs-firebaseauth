import Head from 'next/head'
import {useRouter,} from 'next/router'
import GoogleButton  from 'react-google-button';
import GitHubButton from 'react-github-btn'
import React,{useState,useEffect} from 'react'
import styles from '../styles/Home.module.css'
import {firebaseApp} from '../firebaseConfig';
import {getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,GithubAuthProvider,signInWithPopup} from 'firebase/auth';

function Register() {
  


  const router = useRouter()
  const auth = getAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  
  const signUp =()=>{

        createUserWithEmailAndPassword(auth,email,password)
        .then(()=>{

             router.push('/')
        })       
  }

  const GoogleSignUp =()=>{

    signInWithPopup(auth,googleProvider)
    .then((response)=>{

      localStorage.setItem('Token',response.user.accessToken)
       router.push('/')
    })

  }

  
  const GithubSignUp =()=>{

    signInWithPopup(auth,githubProvider)
    .then((response)=>{

       
      localStorage.setItem("Token",response.user.accessToken)
      router.push('/')
    })
  }

  useEffect(() => {
    
    const token = localStorage.getItem("Token");
    if (token) {
      
      router.push('/')
    }
  }, [router])
  
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Register</title>
        <meta name="description" content="next firebase crud" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Register</h1>
        <input type="email" 
         placeholder='Email'
         className={styles.InputBox}
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
          />
        
        <input type="password" 
        placeholder='Password' 
        className={styles.InputBox}
        value={password}
        onChange={(e)=>setPassword(e.target.value)}

        />
        <button onClick={signUp} className={styles.submitBtn}>SignUp</button>
        <br />
        <GoogleButton onClick={GoogleSignUp} label='SignUp With Google'/>
        <br />
        <button onClick={GithubSignUp}>SignUp With Github</button>
      </main>

     
    </div>
  )
}

export default Register