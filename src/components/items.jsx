  import TodoItem from "./todoitem";
 
  let Items = ({items,onDelete})=>{
    return (
        <>
        <div className="items-container">
          {items.map(item=>(
          <TodoItem todoName={item.name} tododate={item.date} key={item.name} onDelete={onDelete}></TodoItem>
          ))}
           </div>
        </>
    );
   
}

export default Items;