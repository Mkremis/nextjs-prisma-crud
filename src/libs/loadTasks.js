import { prisma } from "./prisma";

const loadTasks = async () => {
  try {
    const tasks = await prisma.task.findMany();
    return tasks;
  } catch (error) {
    console.log(error);
  }
};
export default loadTasks;
