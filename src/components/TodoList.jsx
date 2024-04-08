import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeUpdate } from "../Features/Todo/todoSlice";
import {
  removeTodo,
  changeInputData,
  setIndex,
} from "../Features/Todo/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const checkUpdate = useSelector((state) => state.checkUpdate.status);
  const getIndexForOpacity = useSelector((state) => state.getId);
  const dispatch = useDispatch();

  const updateData = (id) => {
    dispatch(changeUpdate(!checkUpdate));
    const data = todos.filter((e) => e.id === id)[0].text;
    dispatch(changeInputData(data));
    dispatch(setIndex(id));
  };

  const deleteData = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="w-full py-2 px-1 bg-slate-950 rounded-lg flex justify-center items-center">
      <ul className="py-2 px-1 flex w-full flex-col items-center gap-5">
        {todos.map((e) => (
          <li
            className={`w-full flex text-black text-[22px] font-semibold px-2 gap-5 sm:gap-0 flex-col sm:flex-row py-3 items-center justify-between border border-teal-300 rounded-lg sm:text-start text-center bg-slate-50 ${
              checkUpdate
                ? e.id === getIndexForOpacity &&
                  "pointer-events-none opacity-80"
                : null
            }`}
            key={e?.id}
          >
            <p className="w-full sm:w-[65%]">{e?.text}</p>
            <div className="flex flex-row gap-5 items-center">
              <span
                className="text-xl text-slate-50 hover:cursor-pointer bg-teal-500 hover:bg-teal-600 p-3 rounded-md"
                onClick={() => updateData(e.id)}
              >
                <MdModeEditOutline />
              </span>
              <span
                className="text-xl text-slate-50 hover:cursor-pointer bg-red-600 hover:bg-red-700 p-3 rounded-md"
                onClick={() => deleteData(e.id)}
              >
                <MdDelete />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
