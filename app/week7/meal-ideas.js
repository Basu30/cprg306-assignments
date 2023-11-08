
"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient){  
    const response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`); 
    const data = await response.json();
       return data.meals;   
}

export default function MealIdeas({ingredient}){
    const [meals, setMeals] = useState([]);
     
    async function loadMealIdeas(){   
        try{ 
           const mealsIdea = await fetchMealIdeas(ingredient);
           setMeals([mealsIdea]);
        }
        catch (error){
           console.error("No meal ideas found for ", {ingredient});
        }      
    };
   
   useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="p-2 absolute right-0 border-2 border-black">
            <h2 className="border-black">Meal Ideas for {ingredient}</h2>          
            <ul>
                {meals.map((meal) => ( 
                <li key={meal.idMeal}>
                    {meal.strMeal} 
                    {meal.strMealThumb} 
                </li> ))}
            </ul>
        </div>
    );
}
