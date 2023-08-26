const createTask = async (title, description) => {
  const res = await fetch("/api/tasks", {
    method: "POST",
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
export default createTask;
