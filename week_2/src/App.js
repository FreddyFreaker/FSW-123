import {boxes} from './data'
import Box from './Box'

function App() {
   return(
       <div className="card">
        <Box boxes={boxes} />
        </div>
    ) 
    
}

export default App