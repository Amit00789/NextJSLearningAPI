"use client";
import { useEffect, useState } from "react";
import "../../../style.css";

export default function AddUser({ params }) {
  const id = params.userId;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const getUser = async () => {
    let data = await fetch("http://localhost:3000/api/users/" + id);
    data = await data.json();
    setName(data.result.name);
    setAge(data.result.age);
    setCity(data.result.city);
  };
  useEffect(() => {
    getUser();
  });

  const UpdateUser = async () => {
    let res = await fetch("http://localhost:3000/api/users/" + id, {
      method: "Put",
      body: JSON.stringify({ name, age, city }),
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
        value={city}
        placeholder="Enter City"
        className="input-field"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={UpdateUser} className="btn">
        Update User
      </button>
    </div>
  );
}
