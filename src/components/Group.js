import React,{Component} from "react"
import Picture from "./Picture";


class Group extends Component {

    state = {
        groups: [],
        catalog:{},
        classes:""
    }

    componentDidUpdate(prevProps) {
        if(prevProps.text !== this.props.text) {
            this.setState({
                groups: [],
                catalog:{},
                classes:""
            })
        }
    }

    onDragOver = (e) => {
        e.preventDefault()         
        
    }
    onDragEnter = (e) => {
        // if() {
        //     this.setState({
        //         classes: "trueG"
        //     })
        // } else {
        //     this.setState({
        //         classes: "falseG"
        //     })
        // }

        this.setState({
            classes:"activeG"
        })
    }
    onDragEnd = e => {
        this.setState({
            classes: ""
        })
    }
    onDrop = e => {
        const groupName = e.dataTransfer.getData("groupName")
        const id = e.dataTransfer.getData("id");
        if(groupName === this.props.activeGroup){
            const allInGroup = this.props.all[groupName];
            let index = 0;
            allInGroup.forEach((el,i)=>{
                if(el.id === id) {
                    index = i
                }
            })
            let catalog = Object.assign({},this.state.catalog)
            if(!catalog[groupName]) {
                catalog[groupName] = []
            }
            catalog[groupName].push(allInGroup[index])
            this.props.delete(groupName,index)
            this.setState({
                catalog:catalog,
                classes:""
            })
        }
        this.setState({
            classes:""
        })
    }

    makeGroup = () => {
        const groupName = this.props.activeGroup;
        if(!this.state.catalog[groupName]) {
            return <p>put pictures here</p>
        }
        return this.state.catalog[groupName].map(el=><Picture key={el.id +groupName} draggable={false} groupName = {groupName} options={el}/>)
    }

    render() {
        return (
            <div id = "group" groupname = {this.props.activeGroup} className = {this.state.classes}
            onDragOver= {(e)=>this.onDragOver(e)}
            onDrop = {(e)=> this.onDrop(e)}
            onDragLeave = {this.onDragEnd}
            onDragEnter = {(e)=>this.onDragEnter(e)}>
                {this.props.activeGroup ? this.makeGroup() : <p>Choose any group</p>}
            </div>
        )
    }
}
export default Group