import React,{Component} from "react";

export default class extends Component  {
    state = {
        text:""
    }
    changeText  = ev => {
        this.setState({
            text: ev.target.value
        })
    }
    search = () => {
        if(this.state.text.length === 0) {
            alert("WRITE TEXT")
            return
        }
        this.props.search(this.state.text)
    }
    render (){
        return (
            <div id = "search">
                <input onChange={this.changeText} type = "text" />
                <button onClick = {this.search}>Search</button>
            </div>
        )
    }
}