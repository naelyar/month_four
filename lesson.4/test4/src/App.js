import './App.css';
import ContactsPage from './pages/contactPage/ContactPage';
import MainPage from './pages/mainPage/MainPage';

function App() {

  const users =[{
    name: "Dastan",
    age: 25,
  },

{
  name:"Jalil",
  age: 16
},
{
  name:"Ruslan", 
  age: 17
}

]
  return (
    <div>
      <MainPage users ={users}/>

      <ContactsPage/>
    </div>
  )
}
  

export default App;
