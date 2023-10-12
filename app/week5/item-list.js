"use client";

import {useState} from 'react';
import Item from './item.js';
import itemData from './items.json';

export default function ItemList(){

    // map the JSON data to an array
    let itemsArray = itemData.map((item) => ({...item}));
  
    
    // set up states for sorting
    let [sortBy, setSortBy] = useState("name", "category");
    
    
    // sorting function
    itemsArray = itemsArray.sort((a, b) => { 

      if (isNaN(parseInt(a[sortBy]))) {
        // sort alphabetically
        let nameA = a[sortBy].toUpperCase(); 
        let nameB = b[sortBy].toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
    }});


    return(
      <div>
        <div className="flex-1" >
          <label>Sort by: </label>      
            <button className="bg-green-900 p-1 m-2 w-28 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 hover:bg-green-700"  onClick={(e) => setSortBy(e.target.value)} value="name">Name</button>
            <button  className="bg-blue-900 p-1 m-2 w-28 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 hover:bg-blue-700"  onClick={(e) => setSortBy(e.target.value)} value="category">Category</button>  
        </div>
          
        <div className="flex flex-wrap">
          {itemsArray.map((item) => (
            <Item key={item.name} {...item} />
          ))}
        </div>
      </div>
    )
}