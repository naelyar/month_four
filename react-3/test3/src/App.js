import './App.css';
// import AdminPage from './pages/adminPage/AdminPage';
// import MainPage from "./pages/mainPage/MainPage";
// import AboutPage from "./pages/aboutPage/AboutPage";
// import ContactsPage from "./pages/contactsPage/ContactsPage";
// import BlogPage from "./pages/blogPage/BlogPage";
import TestPage from './pages/testPage/TestPage';
// import GuestPage from './pages/guestPage/GuestPage';

function App(props) {
    if(props.role === "admin") {
        return <TestPage/>
    }
    // }else if (props.role === "guest") {
    //     return <GuestPage/>

    // }
}
export default App;