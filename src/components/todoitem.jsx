function TodoItem({todoName,tododate,onDelete}) {
  
  
    return (
    <div className="container">
      
        <div className="row kg-row">
          <div className="col-6">
            {todoName}
          </div>
          <div className="col-4">
            {tododate}
          </div>
          <div className="col-2">
          <button type="button" className="btn btn-danger kg-button" onClick={()=> onDelete(todoName)}>delete</button>
          </div>
        </div>
        </div>
  );
}

export default TodoItem;