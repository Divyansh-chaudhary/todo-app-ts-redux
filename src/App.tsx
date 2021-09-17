import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css"

function App() {
  
  return (
    <div className="app">
      <div className="todo-app">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;