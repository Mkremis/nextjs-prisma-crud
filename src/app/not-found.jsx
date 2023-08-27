import Link from "next/link";
const NotFound = () => {
  return (
    <section className="container mx-auto flex justify-center items-center h-[calc(100vh-7rem)]">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404 - Not Found</h1>
        <Link
          href="/"
          className="text-slate-400 hover:text-slate-200 font-bold text-2xl mt-5"
        >
          Go Home Page
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
