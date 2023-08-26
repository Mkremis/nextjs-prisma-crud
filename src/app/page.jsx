// "use client";
import TaskCard from "@/components/TaskCard";
import loadTasks from "@/libs/loadTasks";
// import { useEffect, useState } from "react";

const HomePage = async () => {
  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   loadTasks().then((tasks) => setTasks(tasks));
  // }, []);
  const tasks = await loadTasks();

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {tasks.length &&
          tasks.map((task) => <TaskCard key={task.id} task={task} />)}
      </div>
    </section>
  );
};

export default HomePage;
