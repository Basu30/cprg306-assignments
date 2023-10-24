"use client";

import { useEffect, useState } from "react"

async function getArtworkIds(){
    try{
        const response = await fetch("");
        if (!response.ok){
            //handle failure of request
        }
        const data = await response.json();
        console.log(data);
        let shuffled = data.ObjectIDs;
        shuffled = [...shuffled].sort(() => 0.5 - Math.random());
        setArtWorkIds(shuffled[0]);
    }    
    catch(error){
        //handling error

    }
}

async function getArtworkById(artId){
    if(artId === null || artId === undefined){
        return null;
    }
    const response = await fetch("");
    if (!response.ok){
        //handle failure of request
    }
    const data = await response.json();
    console.log(data);
}


export default function Gallery(){

    const [ArtWorkIds, setArtWorkIds] = useState(null);
    useEffect( () => {
        getArtworkIds();     
    }, []);

    useEffect(() =>{
        getArtworkById(ArtWorkIds);
    } , [ArtWorkIds]);


    return(
        <section>

        </section>
    )

}