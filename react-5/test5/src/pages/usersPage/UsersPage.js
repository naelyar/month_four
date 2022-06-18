import Users from "../../components/users/Users";
import React , {useState} from "react"

const URL = "https://jsonplaceholder.typicode.com/users";


function UsersPage() {
    const [users,setUsers] = useState([]);
    const [data , setData] = useState ({
        name: "",
        email:""

    })

    const getUsers = () => {
        fetch (URL) 
        .then(response => response.json())
        .then (data => setUsers(data))

    }

    const onChangeData = (e) => {
        setData({...data,[e.target.name]: e.target.value})



    }

    const createUsers = () => {

        const options = {
            method:"POST",
            header: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)

        }
        fetch(URL ,options).then (response => console.log(response));
    }
    return (
        <div>

        <input
            type="text"
            name="name"
            value ={data.name}
            onChange ={onChangeData}

           />
        <input
            type="email" 
            name="email" 
            value ={data.email}
            onChange ={onChangeData}


            />

            <button onClick={createUsers}></button>
            <Users propsUsers ={users}/>
        </div>
    )
}


export default UsersPage;