

function Users (props) {

    
    console.log (props.users)
    return (
        <ul>
        {props.users.map((user , key) =>{
            console.log(user)

           
        return (
            <li style={{marginBottom: "15px" , listStyleType: "none"}} key={key}>
                <div>name:{user.name}</div>
                <div>age:{user.age}</div>

            </li>
        )        
       
        
    })} 
    </ul>

    )
   
}

export default Users;