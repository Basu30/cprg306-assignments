export default function Item({name, quantity, category, onSelect}){
    return (   
        <div className="m-2 w-96 rounded-xl border-2 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-orange-300 focus:ring-opacity-75 hover:bg-yellow-900" onClick={() => onSelect(name)}>
            <h1 className="m-2 text-xl font-bold">{name}</h1>              
            <p className="text-center font-bold text-pink-900">Buy {quantity} in {category}</p>
        </div>
       
    )
}