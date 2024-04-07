import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Conatiner from "./components/Conatiner";
import { TodoContext } from "./Store/ContextAPI";
import Errormsg from "./components/Errormsg";
import Copyright from "./components/Copyright";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [todos, setTodos] = useState([]);
  const [upDateval, setupDateval] = useState("");
  const [checkUpdate, setcheckUpdate] = useState(false);

  const addTodo = (data) => {
    const newData = [...todos, data];
    setTodos(newData);
  };

  const delTodo = (id) => {
    setTodos((preData) => {
      const newData = preData.filter((e, ind) => id !== ind);
      return newData;
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <TodoContext.Provider
        value={{
          todos,
          addTodo,
          delTodo,
          upDateval,
          setupDateval,
          checkUpdate,
          setcheckUpdate,
          setTodos,
        }}
      >
        <Conatiner>
          <AddTodo />
          {todos.length === 0 ? <Errormsg /> : <TodoList />}
          <Copyright />
        </Conatiner>
      </TodoContext.Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
