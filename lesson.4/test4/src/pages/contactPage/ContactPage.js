import React  from "react";

  class ContactsPage extends React.Component{

    constructor(props) {
        super(props);
        this.state =(
            {
                name: "",
                age:0
            }
        )
        this.onChangeInput = this.onChangeInput.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }
    onChangeInput (e) {

        this.setState({[ e.target.name]:e.target.value})

    }
    onSubmit (e) {
        e.preventDefault()
        {
            console.log (this.state)
        }

    }
      render() {

        const user = {
            name:"Dastan", 
            age: 25
        }

        console.log(user["age"])

          return (
              <div>

                  <form onSubmit={this.onSubmit}>
                    <input type = "text" value= {this.state.name} 
                    onChange={this.onChangeInput}
                        name="name"
                    />
                    <input type="number"  value= {this.state.age} 
                    onChange={this.onChangeInput}
                        name="age"
                    />
                    <button type="submit">отправить</button>

                  </form>
              </div>
          )
          }
      
  }


  export default ContactsPage;