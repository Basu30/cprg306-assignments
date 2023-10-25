"use client";

import {useState, useEffect} from 'react';

const [mealIdeas, setMealIdeas] = useState([]);
async function getMealIdeas(ingredient){
    const ingredient = "chicken";
    try{
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        if (!response.ok){
            console.log("error");
        }
        const data = await response.json();
        const idMeal = id
        const strMeal = name;
        strMealThumb = image;
        
        console.log(data);
        setMealIdeas(data.meals);
    }
    catch(error){
        console.log(error);
    }   
}


