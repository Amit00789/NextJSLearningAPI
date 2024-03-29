"use client"
import '../app/style.css'
export default function DeleteUser(props) {
    let userId = props.id
    const DeleteUserData = async() => {
        let result = await fetch("http://localhost:3000/api/users/"+userId, {
            method: "Delete"
        });
        result = await result.json()
        if(result.success){
            alert(result.result)
        }
        else {
            alert(result.result)
        }
    }
    return(
        <div>
            <button className="btn" onClick={DeleteUserData}>Delete this User</button>
        </div>
    )
}