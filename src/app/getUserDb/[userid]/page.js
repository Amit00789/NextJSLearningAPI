"use client";
import { useEffect, useState } from "react";
import "../../style.css";
import { useRouter } from "next/navigation";
export default function UpdateUser({params}) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [tag, setTag] = useState("");

  async function getUserRecord(){
    let data = await fetch("http://localhost:3000/api/userdb/"+params.userid)
    data = await data.json()
    
        setName(data.result.name)
        setTag(data.result.tag)
        setCity(data.result.city)
    
  }
  useEffect(() => {
    getUserRecord()
  },[])

  async function updateUserRecord(){
    let data = await fetch("http://localhost:3000/api/userdb/"+params.userid, {
        method: "Put",
        body: JSON.stringify({ name, tag, city }),
    })
    data = await data.json()
    if(data.success == true){
        alert("User Details has been updated")
        router.push('/getUserDb')
    }
  }
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
      <button  onClick = {updateUserRecord} className="btn">
        Update User
      </button>
    </div>
  );
}
