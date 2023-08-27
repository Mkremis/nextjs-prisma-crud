"use client";

import createTask from "@/libs/createTask";
import loadTask from "@/libs/loadTask";
import updateTask from "@/libs/updateTask";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import deleteTask from "@/libs/deleteTask";
const NewPage = ({ params }) => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [buttonText, setButtonText] = useState("Create Task");

  useEffect(() => {
    if (params.id) {
      loadTask(params.id).then((task) => {
        console.log(task);
        setButtonText("Update Task");
        setTitle(task.title);
        setDescription(task.description);
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (params.id) {
        updateTask(params.id, title, description);
      } else {
        createTask(title, description);
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title" className="font-bold text-sm">
          Titulo de la tarea
        </label>
        <input
          id="title"
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description" className="font-bold text-sm">
          Descripcion de la tarea
        </label>
        <textarea
          id="description"
          rows="3"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Describe tu tarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-500 p-2 text-white rounded-md  mb-4 hover:bg-blue-600 transition-colors duration-300 ease-in-out"
          >
            {buttonText}
          </button>
          {params.id && (
            <button
              type="button"
              className="bg-red-500 p-2 text-white rounded-md  mb-4 hover:bg-blue-600 transition-colors duration-300 ease-in-out"
              onClick={() => {
                const confirmation = confirm(
                  "Are you sure you want to delete this task?"
                );
                if (!confirmation) {
                  return;
                }
                deleteTask(params.id);
                router.refresh();
                router.push("/");
              }}
            >
              Delete Task
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NewPage;
