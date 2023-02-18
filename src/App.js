
import { useStore ,actions} from './store'

function App() {

  const [state, distpatch] = useStore()
  const {todos,todoInput}=state
  const handleAdd=()=>{
    distpatch(actions.addTodo(todoInput))
  }
  return (
    <div className="App">
      <input
      value={todoInput} 
      placeholder="Enter todo ..."
      onChange={e=>{distpatch(actions.setTodoInput(e.target.value))}}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
      {todos.map((job,index)=>(
        <li key={index}>{job} <button >Edit</button><button>Del</button></li>
      ))}
      </ul>
    </div>
  );
}

export default App;
