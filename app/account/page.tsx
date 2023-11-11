import AccountForm from "@/components/ui/form/account-form";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Account() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <section className="max-[500px]:bg-white flex w-screen h-screen items-center justify-center">
      <div className=" bg-white w-[500px] p-8 rounded-lg">
        <AccountForm session={session} />
      </div>
    </section>
  );
}
