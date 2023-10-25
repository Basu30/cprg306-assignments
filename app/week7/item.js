export default function Item({name, quantity, category}){
    return (
        <div className=" bg-slate-800 w-96 m-4 p-2 rounded">
            <h1 className="text-xl font-bold bg-slate-800">{name}</h1>
            <p className="text-sm bg-slate-800">Buy {quantity} in {category}</p>
        </div>
    )
}