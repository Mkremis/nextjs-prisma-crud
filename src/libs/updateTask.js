const updateTask = async (id, title, description) => {
  const res = await fetch(`/api/tasks/$${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      description,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);
};
export default updateTask;
