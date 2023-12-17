import React from "react";
import Task from "./Task";

const TaskList = ({ task, complete, remove }) => {
  return (
    <div>
      {task.map((ele, index) => (
        <div key={index} className="my-2">
          <Task
            index={index}
            todo={ele}
            complete={() => complete(index)}
            remove={() => remove(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
