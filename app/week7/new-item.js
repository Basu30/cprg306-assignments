"use client";

import {useState} from "react";

export default function NewItem({onAddItem}) {
    const [name, setName] = useState("");
    const [ quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    
    const handleSubmit = (items) => {      
        items.preventDefault();
        
        const newItem = {
            name: name,
            quantity: quantity,
            category: category,
        };   

        onAddItem(newItem);
        
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeQuantity = (event) => {
        setQuantity(event.target.value);
    };

    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };

    return (
        <main className="flex justify-center w-full">      
            <form className="p-4 m-4 bg-green-900 text-black max-w-sm w-full rounded-xl " onSubmit={handleSubmit}>
                <div>                   
                    <input
                        className="form-input mt-1 border-2 w-full rounded-lg p-2"
                        placeholder="Item name" required                      
                        value={name}
                        onChange={handleChangeName}
                    />
                </div>
                <div className="flex justify-between">                  
                    <input
                        className="form-input mt-2 w-20 rounded p-2" 
                        type="number" min="1" max="99" required                                         
                        value={quantity}
                        onChange={handleChangeQuantity}
                    />              
                    <select
                        className="ml-1 mt-2 w-40 rounded-lg p-2 "
                        value={category}
                        onChange={handleChangeCategory}
                    >
                        <option value disabled>Category</option>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>                      
                        <option value="canned goods">Canned Goods</option>                      
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Canned Goods</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>                        
                    </select>
                </div>
              <button 
                type="submit" 
                className="btn w-full mt-4 px-4 shadow-md py-2 focus:outline-none focus:ring-opacity-75 focus:ring-2 focus:ring-blue-400 bg-blue-500 hover:bg-blue-700 rounded-lg text-white">+</button>
            </form>       
        </main>
    )  
}
