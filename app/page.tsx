import { getUser } from "@/Action/UserAPI";
import type { ApiResponse } from "@/types/Utility";
import type { User } from "@prisma/client";
import UserTable from "@/components/UserTable";
import AddUserForm from "@/components/AddUserForm";

export default async function Home() {
  const users: ApiResponse<User[]> = await getUser();

  let content;
  if (users.success) {
    content = <UserTable users={users.payload} />;
  } else if (!users.success) {
    content = <div>{users.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 w-4/5">
      <h1 className="text-3xl font-bold mb-6 px-3">User List</h1>
      <div className="flex">
        <div className="w-1/2 px-3">{content}</div>
        <div className="w-1/2 px-3">
          <AddUserForm />
        </div>
      </div>
    </div>
  );
}
