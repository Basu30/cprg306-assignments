import Link from 'next/link';
import StudentInfo from './StudentInfo.js';

export default function Home() {
  return ( 
  <main>
    <StudentInfo/>
    <Link href="week2">week2</Link><br/>
    <Link href="week3">week3</Link>
 </main> 
  )
}