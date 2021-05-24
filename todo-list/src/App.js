import './App.css';
import List from "./greeting"
import {tasks} from './data.js'




function App() {
  
 
  return(
   <div>
   <h2>Todo List</h2>
  
   <h3>
   <ul>
    <List items = {tasks} />
    </ul></h3>
    </div>
  )
  
  
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
}

export default App;
