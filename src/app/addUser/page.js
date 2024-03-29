"use client";
import { useState } from "react";
import "../style.css";
export default function AddUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const Submit = async () => {
    let res = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      body: JSON.stringify({ name, age, email }),
    });
    res = await res.json();
    console.log(res);
  };
  return (
    <div className="add-user">
      <h1>Add New User</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter Name"
        className="input-field"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={age}
        placeholder="Enter Age"
        className="input-field"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        value={email}
        placeholder="Enter Email"
        className="input-field"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={Submit} className="btn">
        Add User
      </button>
    </div>
  );
}
