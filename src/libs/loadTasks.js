const loadTasks = async () => {
  const response = await fetch("http://localhost:3000/api/tasks");
  const data = await response.json();
  console.log(data);
  return data;
};
export default loadTasks;
