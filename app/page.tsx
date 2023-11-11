import AuthForm from "@/components/ui/form/auth-form";

export default function Home() {
  return (
    <section className="flex w-screen h-screen items-center justify-center">
      <div className=" bg-white max-w-[500px] min-w-[400px] p-8 rounded-lg">
        <h1 className=" text-neutral-700 p-6 text-center text-xl font-semibold">
          Welcome to the NextJS Supabase Auth
        </h1>
        <AuthForm />
      </div>
    </section>
  );
}
