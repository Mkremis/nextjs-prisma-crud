const loadTask = async (id) => {
  const response = await fetch(`http://localhost:3000/api/tasks/${id}`);
  const data = await response.json();
  return data;
};
export default loadTask;
