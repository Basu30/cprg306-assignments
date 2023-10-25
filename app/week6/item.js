export default function Item({name, quantity, category}){
    return (
        <div className="ml-auto w-96 bg-orange-300 m-4 p-2 rounded-xl ">
            <h1 className="m-2 text-xl font-bold">{name}</h1>
            <p className="text-center font-bold text-pink-900">Buy {quantity} in {category}</p>
        </div>
    )
}