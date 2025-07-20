import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await response.json();
  
    return {
      props: {
        posts,
      },
    };
  }

  const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
    return (
      <div className="flex flex-col h-screen">
        <Header />
        <main className="p-4">
          <div className="grid grid-cols-3 gap-2">
            {posts.map((user) => (
              <UserCard key={user.id} {...user} />
            ))}
          </div>
        </main>
      </div>
    );
  };

export default Users;
