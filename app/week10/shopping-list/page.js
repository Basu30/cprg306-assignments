"use client";

import {useState} from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas.js';
import { getItems } from '../_services/shopping-list-service.js';
import { addItem } from '../_services/shopping-list-service.js';
import { useEffect } from 'react';
import { useUserAuth } from '../_utils/auth-context.js';

export default function Page(){

    const {user} = useUserAuth();
    const [selectedItemName, setSelectedItemName] = useState("Name");

    const [items, setItems] = useState([]);

    const handleItemSelect = (name) => {
        const cleanedName = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        const cleanN = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        setSelectedItemName(cleanedName);
    }

    const handleAddItem = async (newItem) => {
        try{
            const id = await addItem({userId: user.uid, item: newItem});
            newItem.id = id;
            setItems([...items, newItem]);
        }
        catch(error){
            console.error("Error adding item", error);
        }
    };

    // const handleAddItem = (newItem) => {
    //     setItems([...items, newItem]);
    // };

    
    async function loadItems(){
        try{
            const items = await getItems({userId: user.uid});
            setItems([...items]);
        }
        catch(error){
            console.error("Error loading items", error);
        }
    };

   
    useEffect(() => {
        if(user){
            getItems(user.uid, setItems);
        } 
        // loadItems();
    }, [user]);

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