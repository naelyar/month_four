import React from "react";
import { Header } from "../../components/servises/header/Header";
import {Servises} from "../../components/servises/Servises";

class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({menuStatus:"false"})
        this.handleMenu = this.handleMenu.bind(this)
    }

    servises = ["ux/ui", "front-end", "back-end", "flutter", "sql", "python"]
    handleMenu () {
        this.setState ({menuStatus:"!this.state.menuStatus"})
    }
    
    render() {
    return ( 
        <>
            <h2> Title - {this.props.title} </h2>
            {this.state.menuStatus == true ?  <Header/> :"" }
            <Servises servises = {this.servises}/>

            <button onClick={this.handleMenu}>menu</button>
        </>

        )
    }
}

export default BlogPage;