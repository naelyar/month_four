const url ="https://jsonplaceholder.typicode.com/users"

const getUserBtn = document.getElementById('get')

const data = {
    name: "Dastan", 
    email: "anvj@gmail.com"
}

const createUser = () => {
    const options = {
        method: "POST",
        //  headers:{
        //      "Content-Type":"aplication/json"
        //  },
        body: JSON.stringify(data)

    }
    fetch (url ,options).then(response => console.log(response));

}


const getUsers =() => {
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
}

getUserBtn.addEventListener('click',createUser)











          