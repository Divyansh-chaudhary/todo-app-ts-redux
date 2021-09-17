import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css"

function App() {
  
  return (
    <div className="app">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;