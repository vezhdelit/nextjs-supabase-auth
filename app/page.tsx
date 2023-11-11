import AuthForm from "@/components/ui/form/auth-form";

export default function Home() {
  return (
    <section className=" max-[500px]:bg-white flex w-screen h-screen items-center justify-center">
      <div className=" bg-white w-[500px] p-8 rounded-lg">
        <h1 className=" text-neutral-700 p-6 text-center text-xl font-semibold">
          Welcome to the NextJS Supabase Auth
        </h1>
        <AuthForm />
      </div>
    </section>
  );
}
