"use client";

import {useState} from 'react';
import Item from './item.js';


export default function ItemList({items}){
    
    // set up states for sorting
    let [sortBy, setSortBy] = useState("name");
    
    
    // sorting function
    let itemData = items.sort((a, b) => { 

      if (sortBy === "name") {
        // sort alphabetically
        return a.name.localeCompare(b.name);
      } 
      else if ( sortBy === "category") {
        return a.category.localeCompare(b.category);  
      }    
      return 0;
    });


    return(
      <div>
        <div className="flex-1" >
          <label className="m-6 text-red-900">Sort by: </label>      
            <button className=" bg-green-900 p-2 m-4 w-36 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 hover:bg-green-700 text-white"  onClick={(e) => setSortBy(e.target.value)} value="name">Name</button>
            <button  className="bg-blue-900 p-2 m-4 w-36 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 hover:bg-blue-700 text-white"  onClick={(e) => setSortBy(e.target.value)} value="category">Category</button>  
        </div>
          
        <div className="flex flex-wrap">
          {itemData.map((item) => (
            <Item key={item.name} {...item} />
          ))}
        </div>
      </div>
    )
}