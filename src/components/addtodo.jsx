import { useState } from "react";

function AddTodo({onClick}){

   let [todoName,settodoName]=useState("")
   let [tododate,settododate]=useState("")

    const handleChangeName=(event)=>{
      settodoName(event.target.value)
    }
    const handleChangeDate=(event)=>{
      settododate(event.target.value)
    }
     
    let onClickHandle=(event)=>{
      event.preventDefault();
      onClick(todoName,tododate)
      settodoName("")
      settododate("")
    }
    return (
        <div className="container text-center ">
            <form className="row kg-row" onSubmit={onClickHandle}>
        <div className="col-6">
          <input type="text" placeholder="enter your task" value={todoName} onChange={handleChangeName}/>
        </div>
        <div className="col-4">
          <input type="date" name="" id="" value={tododate} onChange={handleChangeDate}/>
        </div>
        <div className="col-2">
        <button  className="btn btn-success kg-button" >add</button>
        </div>
      </form>
        </div>
    )
}

export default AddTodo;