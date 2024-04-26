import AddTodo from "./components/addtodo";
import AppName from "./components/appname";
import Items from "./components/items";
import './components/App.css';
import { useState } from "react";
import Message from "./components/Message";

function App() {

  let initalValue=[
    {
      name:'buy milk',
      date:'4/4/24'
    },
    {
      name:'hustle hard buddy',
      date:'4/4/24'
    },
    {
      name:'uff...at the top broda',
      date:'4/4/24'
    }
  ];

  let [todoitems,setinitialValue]=useState(initalValue);

  let handleOnClick=(todoName,todoDate)=>{
    const newtodoitems=[...todoitems,{name:todoName,date:todoDate}];
        setinitialValue(newtodoitems)
  }
   const onDelete=(todoname)=>{
    let newItems=todoitems.filter(item=> item.name !==todoname)
    setinitialValue(newItems)
   }

  return (
    <center className="todo-container">
      <AppName/>
      <AddTodo onClick={handleOnClick}/>
      {todoitems.length===0 && <Message> </Message>}
      <Items items={todoitems} onDelete={onDelete}></Items>
      
      
    </center>
  );
}

export default App;
