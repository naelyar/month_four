import React from "react";

class TextPage extends React.Component {
    constructor (props) {
        super (props)
        this.state = ({title:" old Title"})
        this.changeTitle = this.changeTitle.bind(this)
    }
changeTitle(e) {
    e.preventDefault()
}

    render () {
        return (
            <div>
                testPage -{this.state.title}

                <button> Title</button>
            </div>
        )
    }
}

export default TextPage