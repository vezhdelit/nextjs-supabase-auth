import Link from "next/link";

const Home = () => {
  return (
    <section className=" flex flex-col w-screen h-screen items-center ">
      <div className="flex p-4 w-full">
        <nav className="flex w-full bg-white py-6 px-8 rounded-lg justify-between">
          <Link href="/account" className="underline">
            Account
          </Link>
          <Link href="/signin" className="underline">
            Sign In
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default Home;
