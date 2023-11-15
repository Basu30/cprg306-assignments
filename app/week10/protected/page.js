// "use client";

// import {useUserAuth} from '../_utils/auth-context.js';

// export default function Page(){
    
//     const {user, gitHubSignIn, firebaseSignOut} = useUserAuth(); // this is the hook that will trigger the auth popup

//     return (
//         <main>
//             <header>
//                 <h1>Protected Page</h1>
//             </header>
//             <section>
//                 {user ? (
//                     <p>You are logged in! This page is protected!</p>

//                 ) : (
//                     <p>You are must be logged in to view this page!</p>
//                 )}

//             </section>
//         </main>
//     )
// }