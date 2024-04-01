"use client";
import { useState } from "react";
import "../style.css";
export default function AddUser() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [tag, setTag] = useState("");

  const Submit = async () => {
    let res = await fetch("http://localhost:3000/api/userdb", {
      method: "Post",
      body: JSON.stringify({ name, city, tag }),
    });
    res = await res.json();
    if(res.success){
        alert("User has been added into database")
    }
  };
  return (
    <div className="add-user">
      <h1>Add New User Into Database</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter Name"
        className="input-field"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={city}
        placeholder="Enter City"
        className="input-field"
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        value={tag}
        placeholder="Enter Tag"
        className="input-field"
        onChange={(e) => setTag(e.target.value)}
      />
      <button onClick={Submit} className="btn">
        Add User
      </button>
    </div>
  );
}
