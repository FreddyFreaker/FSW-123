import { tasks } from "./data";

function List({todos}) {
   
   const list = tasks.map((task,index) => {
    
    return(
        <div key={index} >
            <input type="checkbox" id={index} name="item1"></input>
           <label> {task.text}</label>
        </div>
    )


   });
   return(
    <>
    {list}
    </>
   )


}

export default List


/* return (
  <>  
     <h1>ToDo List</h1>
     <ul>
            <input type="checkbox" id="item1" name="item1" value="homework"></input>
            <label>Homework</label>
            <br></br>
            <input type="checkbox" id="item1" name="item1" value="homework"></input>
            <label>Dishes</label>
            <br></br>
            <input type="checkbox" id="item1" name="item1" value="homework"></input>
            <label>Laundry</label>
        </ul>
  </>
  
  );
  */