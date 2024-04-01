import Link from "next/link";
import "../style.css";
export async function getUser() {
  let data = await fetch("http://localhost:3000/api/userdb");
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
                    <Link href='/'>Update</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
