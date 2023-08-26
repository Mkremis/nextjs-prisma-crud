"use client";

const NewPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;

    console.log(title, description);
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

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 w-1/4" onSubmit={handleSubmit}>
        <label htmlFor="title" className="font-bold text-sm">
          Titulo de la tarea
        </label>
        <input
          id="title"
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Titulo"
        />

        <label htmlFor="description" className="font-bold text-sm">
          Descripcion de la tarea
        </label>
        <textarea
          id="description"
          rows="3"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Describe tu tarea"
        ></textarea>
        <button className="bg-blue-500 p-2 text-white rounded-md w-full mb-4 hover:bg-blue-600 transition-colors duration-300 ease-in-out">
          Crear
        </button>
      </form>
    </div>
  );
};

export default NewPage;
