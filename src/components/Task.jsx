import React from "react";

const Task = ({ todo, complete, remove }) => {
  return (
    <div className="">
      <div className="flex align-middle items-center justify-start space-x-4 p-4 bg-gradient-to-r from-slate-500 to-slate-200 rounded-t-md">
        <input
          className="bg-transparent h-10"
          onChange={complete}
          checked={todo.status}
          type="checkbox"
          name=""
          id=""
        />
        <h1
          className={`w-3/4 font-semibold text-slate-950 ${
            todo.status ? "text-decoration-line: line-through" : ""
          }`}
        >
          {todo.content}
        </h1>
        <div className="flex  align-middle justify-evenly space-x-2 ">
          <button
            onClick={remove}
            className="bg-red-700 p-1 px-2 rounded-md text-white font-medium"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-r from-grad1 to-grad2 h-1 rounded-full"></div>
    </div>
  );
};

export default Task;
