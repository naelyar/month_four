function Users (props) {
    return (
        <ul>
        {
            props.propsUsers.length > 0
            ?
            props.propsUsers.map((user , key) =>{

            return(
                <li key={key}>{user.name}</li>
               


             )
         })

                :
                <li> empty</li>  
       }

         <li>
             <button onClick ={props.getUsersProp}> get girl name</button>
         </li>
        </ul>
    )
}

export default Users;