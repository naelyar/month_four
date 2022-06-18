import React , {useState} from "react";

function ContactPage () {
    const [data, setData] = useState(
    
        {
            userName: "",
            age:"0"
            
    }
    
    )

    const onChangeValue = (e) => {
        e.preventDefault();
        setData ({ ...data,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        console.log(data)
    }
    return (
        <div>
            
            <input
             type ="text" 
            value = {data.value} 
            onChange ={onChangeValue} 
            name="userName"

            />
            <input
             type ="text"
             value = {data.age} 
             onChange ={onChangeValue} 
             name="age"

             />

            <button onClick={onSubmit}>post users</button>
        </div>
    )
}

export default ContactPage;