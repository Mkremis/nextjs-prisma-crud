"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const TaskCard = ({ task }) => {
  const router = useRouter();
  return (
    <div
      className="bg-slate-900 p-3 mt-10 hover:bg-slate-800 hover:cursor-pointer"
      onClick={() => router.push(`/tasks/edit/${task.id}`)}
    >
      <h3 className="font-bold text-2xl mb-2">{task.title.toUpperCase()}</h3>
      <p>{task.description}</p>
      <small suppressHydrationWarning>
        {new Date(task.createdAt).toLocaleDateString()}
      </small>
    </div>
  );
};

export default TaskCard;
