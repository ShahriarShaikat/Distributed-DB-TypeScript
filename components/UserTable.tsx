"use client";

import { deleteUser } from "@/Action/UserAPI";
import { User } from "@prisma/client";
import { FC } from "react";

interface UserTableProps {
  users: User[] | null;
}

const UserTable: FC<UserTableProps> = ({ users }) => {
  const handleDeleteUser = async (id: number) => {
    await deleteUser(id);
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              ID
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Name
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {users?.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-100">
              <td className="text-left py-3 px-4">{user.id}</td>
              <td className="text-left py-3 px-4">{user.name}</td>
              <td className="py-3 px-4">
                <div className="flex space-x-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Edit
                  </button>

                  <button
                    onClick={async () => await handleDeleteUser(user.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
