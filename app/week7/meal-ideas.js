
"use client";

import { useEffect, useState } from "react";


async function fetchMealIdeas({ingredient}){  
    try { 
    const response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);   
    const data = await response.json();
    return data
    } catch (error) {
        console.error(error);
    }
    return[];

}


export default function MealIdeas({ingredient}){
    const [meals, setMeals] = useState([]);
     
    async function loadMealIdeas(){   
        try{ 
           const mealsIdea = await fetchMealIdeas({ingredient});
           setMeals([...mealsIdea.meals]);
        }
        catch (error){
           console.error("Error ", error);
        }      
    };
   
   useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="p-2 border-1">
            <h2 className="border-black">Meal Ideas for {ingredient}</h2>          
            <ul>
                {meals.map((meal) => ( 
                <li key={meal.idMeal}>
                    <p>{meal ? meal.strMeal : "error"}</p>
                    <img src={meal ? meal.strMealThumb : "error"} />                   
                </li> ))}
            </ul>          
        </div>
    );
}
