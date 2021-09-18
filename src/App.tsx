import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css"
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import TodoApp from "./components/TodoApp";

function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <TodoApp />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;