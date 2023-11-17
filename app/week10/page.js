"use client";
import Link from "next/link";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    async function handleGitHubSignIn(){
    try{
        await gitHubSignIn();   
    } catch (error) {
        console.log(error);
    }
}
    async function handleFirebaseSignOut(){
    try{
        await firebaseSignOut();    
    } catch (error) {
        console.log(error);
    }
}

if(!user){
    return (
        <main>
            <header>
                <h1>Week 8</h1>
                <h2>Shopping List</h2>
            </header>
            <section>
                <button className="text-lg m-2 hover:underline"
                onClick={handleGitHubSignIn}>Sign in</button>
            </section>
        </main>
    )
}

return (
    <main>
        <header>
            <h1>Week 8</h1>
            <h2>Shopping List</h2>
        </header>
        <section>
            {user ? (
                <div>
                    <p>Welcome, {user.displayName}</p>                      
                    <img src={user.photoURL} className="w-8 h-8" />
                    <button className="text-lg m-2 hover:underline" onClick={handleFirebaseSignOut}>Sign Out</button>
                </div>
            ) : (
                <button className="text-lg m-2 hover:underline"
                onClick={handleGitHubSignIn}>Sign in</button>
            )}

        </section>
       <Link href="/week8/shopping-list"> Welcome to Shopping List</Link>
    </main>

  )
}
