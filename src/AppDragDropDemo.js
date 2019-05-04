import React, {Component} from "react";
import Picture from "./components/Picture"

export default class AppDragDropDemo extends Component {
    state = {
        tasks: [
            {name:"Dxk",category:"wip",bgcolor:"red"},
            {name:"React",category:"complete",bgcolor:"blue"},
            {name:"Oddoodo",category:"wip",bgcolor:"green"},
        ]
    }
    onDragStart = (ev,id) => {
        ev.dataTransfer.setData("id",id)
    }

    onDragOver = (ev) => {
        ev.preventDefault()
    }

    onDrop = (ev,cat) => {
        let id = ev.dataTransfer.getData("id");

        let tasks = this.state.tasks.filter((task)=>{
            if(task.name == id) {
                task.category = cat;
            }
            return task
        })

        this.setState({
            ...this.state,
            tasks
        })
    }
   
    render() {

        let tasks = {
            wip: [],
            complete: []
        }

        this.state.tasks.forEach( (t) => {
            tasks[t.category].push(
                <div key={t.name}
                    onDragStart = {(e) => this.onDragStart(e,t.name)}
                    draggable
                    className="draggable"
                    style={{backgroundColor:t.bgcolor}}>
                    {t.name}
                </div>
            )
        })
       
        return (
            <div className = "container-drag">
                <h2 className = "header">D{"&"}D</h2>
                <div className = "wip">
                    <span className = "task-header">WIP</span>
                    {tasks.wip}
                    <Picture groupName = "cat" options={{farm:66,server:65535,id:32819811357,secret:"0d8ced29f1"}}/>
                </div>
                <div className = "droppable"
                     onDragOver= {(e)=>this.onDragOver(e)}
                     onDrop = {(e)=> this.onDrop(e,"complete")}>
                    <span className = "task-header">COMPLETED</span>
                    {tasks.complete}
                </div>
            </div>
        )
    }
}