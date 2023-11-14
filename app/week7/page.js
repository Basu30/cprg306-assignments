"use client";

import {useState} from 'react';
import ItemList from './item-list.js';
import itemData from './items.json';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas.js';

export default function Page(){
    const [selectedItemName, setSelectedItemName] = useState("Name");

    const [items, setItems] = useState(
        itemData.map((items) => ({...items})));

    const handleItemSelect = (name) => {
        const cleanedName = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        const cleanN = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        setSelectedItemName(cleanedName);
    }

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return(
        <main className="flex bg-sky-500">
            
           <div className="flex-1 w-96" >         
               <h1 className="heading text-4xl font-bold text-white ml-16 font-serif">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />         
                <ItemList items={items} onItemSelect={handleItemSelect} />              
            </div>   
            <div className="w-96 left-0 p-4 m-4 max-w-sm font-bold text-white" >
                <MealIdeas ingredient={selectedItemName} />
            </div>       
        </main>
    )
}