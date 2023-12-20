import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskList from "./TaskList";
import axiosInstance from "../utils/axios";

const InputForm = () => {
  const [task, setTask] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTask = async (e) => {
    e.preventDefault();
    try {
      const newTask = {
        content: text,
        status: false,
      };
      const findTask = task.find((ele) => ele.content == newTask.content);
      if (findTask) {
        toast.error("Task already exist");
        setText("");
      } else {
        const response = await axiosInstance.post("/createTasks", newTask);
        setTask(response.data);
        toast.success("New task created");
        setText("");
      }
    } catch (error) {
      toast.error("Something went wrong", error);
      setText("");
    }
  };

  const completeTask = async (index) => {
    try {
      const id = task[index].id;
      const taskList = [...task];
      const payload = {
        ...taskList[index],
        status: !taskList[index].status,
      };
      const findTask = task.find((ele) => ele.id == id);
      const response = await axiosInstance.put(`/updateTasks/${id}`, payload);
      setTask(response.data);
      if (!payload.status) {
        toast.success("Task is set as Incomplete");
      } else {
        toast.success("Task is set as completed");
      }
    } catch (error) {
      toast.error("Something went wrong", error);
    }
  };

  const removeTask = async (index) => {
    try {
      const id = task[index].id;
      const response = await axiosInstance.delete(`/deleteTasks/${id}`);
      setTask(response.data);
      toast.success("Task deleted successfuly");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/getTasks");
      setTask(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="text-black border bg-white rounded-xl shadow-xl max-w-md mx-auto mt-20  align-middle p-6 space-y-6">
      <ToastContainer />
      <div className="text-center p-6 space-y-5">
        <h1 className="font-bold mb-10 text-3xl font-sans">Add new task</h1>
        <form className="">
          <input
            className="text-slate-500 p-2 font-medium rounded-l-lg bg-slate-200"
            type="text"
            name="text"
            value={text}
            onChange={handleChange}
            placeholder="Enter Task"
          />
          <button
            className="rounded-r-lg bg-gradient-to-r from-grad1 to-grad2 p-2 text-white hover:border-grad1  hover:text-grad2 hover:font-semibold hover:bg-white"
            onClick={addTask}
          >
            Add
          </button>
        </form>
        <div className="bg-gradient-to-r from-grad1 to-grad2 h-1 rounded-full"></div>
      </div>

      <TaskList
        task={task}
        complete={(index) => completeTask(index)}
        remove={(index) => removeTask(index)}
      />
    </div>
  );
};

export default InputForm;
