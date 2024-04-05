"use client"
import { useRouter } from 'next/navigation'
import '../app/style.css'
export default function DeleteDbUser(props) {
    const router = useRouter()
    let userId = props.userid
    const DeleteUserData = async() => {
        let result = await fetch("http://localhost:3000/api/userdb/"+userId, {
            method: "Delete"
        });
        result = await result.json()
        if(result.success){
            alert("user deleted")
            router.push('/getUserDb')

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