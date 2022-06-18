import React,{useState} from "react";
import Users from "../../components/users/Users";
import classes from "./mainPage.module.css";

function MainPage () {
    const [title, setTitle] = useState({title:"old title"});
    const [count, setCount] = useState(0);

    const [users,  setUsers] = useState(["Dastan" , "Abai", "Kanat"])

    function changeTitle (e) {
        e.preventDefault();
        setTitle({title:"new Title"})
    }

    const upCount = (e) => {
        e.preventDefault();
        setCount(count + 1)
    }

    const downCount = (e) => {
        e.preventDefault();
        setCount(count - 1)
    }
    const getNewUsers = (e) => {
        e.preventDefault();
        setUsers ([]) 
    }



    

    return(
        <div>
            Main page - {title.title}
            <button onClick={changeTitle}>change title</button>
            <div className={classes.countWrapper}>
                <p>вы нажали на кнопку {count} раз</p>
                <button onClick={upCount}>+</button>
                <button onClick={downCount}>-</button>

            </div>

            <Users propUsers={users} getUsersProp={getNewUsers}/>

        </div>
    )
}
export default MainPage;