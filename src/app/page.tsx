import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/users">Get User List</Link>
      <br />
      <br />
      <Link href="/addUser">Add User</Link>
      <br />
      <br />
      <Link href="/addUserDb">Add User Into Database</Link>
      <br />
      <br />
      <Link href="/getUserDb">Get Users From Database</Link>
      <br />
      <br />
      <Link href="/uploadImage">Upload Image</Link>
    </main>
  );
}
