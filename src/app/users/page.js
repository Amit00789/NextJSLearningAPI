import Link from "next/link";
import DeleteUser from "../../utils/deleteUser";

export async function getUser() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data.data;
}
export default async function User() {
  const users = await getUser();
  return (
    <div>
      <h1>User List</h1>
      {users.map((item) => (
        <div key={item.id}>
          <Link
            href={`/users/${item.id}/update`}
            style={{ marginRight: "40px" }}
          >
            Edit
          </Link>
          <Link href={`/users/${item.id}`}>{item.name}</Link>
          <DeleteUser id = {item.id}/>
        </div>
      ))}
    </div>
  );
}
