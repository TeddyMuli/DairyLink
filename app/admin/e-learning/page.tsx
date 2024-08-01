import CreateBlog from "@/components/cooperative/CreateBlog";
import { getUser } from "@/components/supabase/GetUser";

const Page = async () => {
  const user = await getUser();

  return (
    <CreateBlog user={user} />
  )
}

export default Page;
