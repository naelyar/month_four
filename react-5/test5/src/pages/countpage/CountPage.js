import React, {useState , useEffect} from "react";
const URL = "https://jsonplaceholder.typicode.com/users";




function CountPage () {
    const [count, setCount] = useState(0);
    const [users , setUsers] = useState ([]);
    const [test , setTest] = useState (false)

    useEffect (() =>{
        fetch(URL).then(response => response.json()).then (data => setUsers(data))

        // document.title = `counter ${count}`

    } , [test])
    const upCount = () => {
        setCount (count + 1)
        // console.log(count)
        // test()

    }

    const changeTest = () => {
        setTest(!test);

    }

    // const test= () =>{
    //     console.log(count)

    // }
    // fetch(URL).then(response => response.json()).then (data => setUsers(data))
    return (
        <div>
        <p> counter {count}</p>
        <button onClick ={changeTest}>change</button>

        <ul>
            {users.map((user) => <li>{user.name}</li>)}
        </ul>
            
        </div>
    )
}

export default CountPage;