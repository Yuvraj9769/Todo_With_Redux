import { useEffect, useRef } from "react";
import { addTodo, updateTodo, changeUpdate } from "../Features/Todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const AddTodo = () => {
  const updateBtnVisiblity = useSelector((state) => state.checkUpdate.status);
  const inputText = useSelector((state) => state.getInput.data);
  const dispatch = useDispatch();
  const inpData = useRef("");

  const getData = () => {
    if (inpData.current.value !== 0 && inpData.current.value.trim()) {
      const data = inpData.current.value;
      dispatch(addTodo(data));
      inpData.current.value = "";
    } else if (!inpData.current.value.trim() || inpData.current.value === "") {
      toast.error("Please enter a valid todo!");
    }
  };

  if (updateBtnVisiblity) {
    inpData.current.value = inputText;
  }

  const updateData = () => {
    if (inpData.current.value !== "" && inpData.current.value.trim()) {
      dispatch(updateTodo(inpData.current.value));
      dispatch(changeUpdate(!updateBtnVisiblity));
      inpData.current.value = "";
    } else if (inpData.current.value === "" || !inpData.current.value.trim()) {
      toast.error("Please enter a valid todo!");
    }
  };

  return (
    <div className="w-full p-2 flex flex-col items-center gap-6">
      <h1 className="text-6xl font-bold uppercase text-slate-50 my-4">
        Todo List
      </h1>
      <div className="w-full p-2 flex flex-col sm:flex-row items-center gap-5 border border-teal-600 rounded-lg lg:justify-between">
        <input
          type="text"
          className="outline-none rounded-lg p-2 w-full lg:w-[55%] text-lg"
          ref={inpData}
          onKeyDown={(e) =>
            e.key === "Enter"
              ? updateBtnVisiblity
                ? updateData()
                : getData()
              : null
          }
        />
        {updateBtnVisiblity ? (
          <button
            className="bg-teal-500 px-5 py-3 rounded-lg text-base text-slate-50 font-semibold hover:bg-teal-600"
            onClick={() => updateData()}
          >
            Update
          </button>
        ) : (
          <button
            className="bg-blue-700 px-5 py-3 rounded-lg text-base text-slate-50 font-semibold hover:bg-blue-800"
            onClick={getData}
          >
            Add Todo
          </button>
        )}
      </div>
    </div>
  );
};

export default AddTodo;
