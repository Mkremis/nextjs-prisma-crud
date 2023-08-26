const deleteTask = async (id) => {
  const res = await fetch(`/api/tasks/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  console.log(data);
};
export default deleteTask;
