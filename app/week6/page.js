"use client";
import {useState} from 'react';
import ItemList from './item-list.js';
import itemData from './items.json';
import NewItem from './new-item.js';


export default function Page(){

    const [items, setItems] = useState(
        itemData.map((items) => ({...items})));

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return(
        <main className="bg-sky-500">          
            <h1 className="heading text-4xl font-bold text-white text-center">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />         
            <ItemList items={items} /> 
        </main>
    )
}