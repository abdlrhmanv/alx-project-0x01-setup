// pages/users/index.tsx
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import UserModal from "@/components/common/UserModal";
import { UserProps } from "@/interfaces";
import { useState } from "react";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: {
      users,
    },
  };
}

const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [allUsers, setAllUsers] = useState<UserProps[]>(users);

  const handleSave = (user: UserProps) => {
    setAllUsers([...allUsers, user]);
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-end mb-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={() => setModalOpen(true)}
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {allUsers.map((user, key) => (
            <UserCard key={key} {...user} />
          ))}
        </div>

        {modalOpen && (
          <UserModal
            onClose={() => setModalOpen(false)}
            onSubmit={handleSave}
          />
        )}
      </main>
    </div>
  );
};

export default Users;
