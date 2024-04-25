import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/addUserDb">Add User Into Database</Link>
      <br />
      <br />
      <Link href="/getUserDb">Get Users From Database</Link>
    </main>
  );
}
