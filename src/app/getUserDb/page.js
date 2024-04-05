import Link from "next/link";
import "../style.css";
import DeleteDbUser from "@/lib/deleteDbUser";
export async function getUser() {
  let data = await fetch("http://localhost:3000/api/userdb", {cache: "no-cache"});
  data = await data.json();
  return data.result;
}
export default async function User() {
  const users = await getUser();
  return (
    <div>
      <h1>User List</h1>

      <div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>City</td>
              <td>Tag</td>
              <td>Update</td>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td>{item.tag}</td>
                <td>
                  <Link href={"/getUserDb/" + item._id}>Update</Link>
                </td>
                <td>
                  <DeleteDbUser userid={item._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
