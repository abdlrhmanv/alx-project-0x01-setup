import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";


export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
  
    return {
      props: {
        users
      }
    }
  }
  const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
    console.log(users)
    return (
      <div className="flex flex-col h-screen">
        <Header />
        <main className="p-4">
          <div className="grid grid-cols-3 gap-2 ">
            {
              users?.map(({ id, name, username, email, address, phone, website, company }: UserProps, key: number) => (
                <UserCard user={{ id, name, username, email, address, phone, website, company }} key={key} />
              ))
            }
          </div>
        </main>
      </div>
    )
  }
  
  export default Users;