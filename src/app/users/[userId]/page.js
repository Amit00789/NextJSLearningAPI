export async function getUser(id) {
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  data = await data.json();
  return data.data;
}
export default async function User({ params }) {
  const users = await getUser(params.userId);
  return (
    <div>
      <h1>User List</h1>
      {users.map((item) => (
        <div key={item.id}>
          <table style={{ border: "2px solid" }}>
            <tbody>
              <tr>
                <td style={{ border: "2px solid" }}>{item.name}</td>
                <td style={{ border: "2px solid" }}>{item.id}</td>
                <td style={{ border: "2px solid" }}>{item.age}</td>
                <td style={{ border: "2px solid" }}>{item.city}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
