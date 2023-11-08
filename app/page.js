import Link from 'next/link';
import StudentInfo from './StudentInfo.js';

export default function Home() {
  return ( 
  <main>
    <StudentInfo/>
    <Link href="week2">week2</Link><br/>
    <Link href="week3">week3</Link><br/>
    <Link href="week4">week4</Link><br/>
    <Link href="week5">week5</Link><br/>
    <Link href="week6">week6</Link><br/>
    <Link href="week7">week7</Link> 
 </main> 
  )
}