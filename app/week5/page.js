import ItemList from './item-list.js';

export default function Page(){
    return(
        <main className="bg-slate-950">          
            <h1 className="heading text-4xl font-bold">Shopping List</h1>
            <ItemList />
        </main>
    )
}