"use client"

import { useState } from "react";

export default function UploadImage() {
    const [file,setFile] = useState()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.set('file',file);
        let res = await fetch("/api/upload", {
            method:"POST",
            body:data
        });
        res = await res.json();
        if(res.success){
            alert(res.message)
        }

    }
    return(
        <div>
            <h1>Upload Image</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" name="file" onChange={(e) => setFile(e.target.files?.[0])}></input>
                <button type="submit" >Upload Image</button>
            </form>
        </div>
    )
}