import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Conatiner from "./components/Conatiner";
import Errormsg from "./components/Errormsg";
import Copyright from "./components/Copyright";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Conatiner>
        <AddTodo />
        {todos.length === 0 ? <Errormsg /> : <TodoList />}
        <Copyright />
      </Conatiner>
      <ToastContainer />
    </div>
  );
}

export default App;
