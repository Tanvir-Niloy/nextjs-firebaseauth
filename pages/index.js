import {useEffect,useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router';
import {firebaseApp,database} from '../firebaseConfig'
import {collection,addDoc,getDocs} from 'firebase/firestore';
import { async } from '@firebase/util';

export default function Home() {


  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [fireData, setFireData] = useState([]);


  const databaseRef = collection(database,'Crud Data')

  const router = useRouter();

  useEffect(() => {
  
    const token = localStorage.getItem("Token");
    if (token) {
      
      getData()
    }else{

      router.push('/login')
    }
  }, [])


  const addData = ()=>{

    addDoc(databaseRef,{

       name:name,
       age:age
    })
    .then(()=>{

       alert('Data Sent')
       setAge(null)
       setName('')
    })
    .catch((err)=>{

       console.error(err)
    })
  }


  const getData =async()=>{

   await getDocs(databaseRef)
   .then((response)=>{

    setFireData(response.docs.map((data)=>{

                 return {...data.data(),id:data.id}
              }))
   })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs Crud Auth</title>
        <meta name="description" content="next firebase crud" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>home</h1>
        <input type="text" 
         placeholder='Name'
         className={styles.InputBox}
         value={name}
         onChange={(e)=>setName(e.target.value)}

         />
        <input type="number" 
        placeholder='Age' 
        className={styles.InputBox}
        value={age}
        onChange={(e)=>setAge(e.target.value)}
        />
        <button onClick={addData} className={styles.submitBtn}>ADD</button>
        <div>
          {fireData.map((data)=>{

              return (

                <div key={data.id}>
                  <h4>{data.name}</h4>
                  <h4>{data.age}</h4>
                </div>
              )
          })}
        </div>
      </main>

     
    </div>
  )
}
