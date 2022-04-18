import Link from 'next/router'

export const Layout = (props) => {
  return (
   
    <>
     <Link href={'/'}></Link>
    <Link href={'/login'}></Link>
    <Link href={'/register'}></Link>
    </>

  )
}
