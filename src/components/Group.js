import React,{Component} from "react"
import Picture from "./Picture";


class Group extends Component {

    state = {
        groups: [],
        catalog:{},
        classes:""
    }

    onDragOver = (e) => {
        e.preventDefault() 

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
            return <label>put pictures here</label>
        }
        return this.state.catalog[groupName].map(el=><Picture key={el.id} draggable={false} groupName = {groupName} options={el}/>)
    }

    render() {
        if(!this.props.activeGroup) {
            return <label>Choose any group</label>
        }
        return (
            <div id = "group" className = {this.state.classes}
            onDragOver= {(e)=>this.onDragOver(e)}
            onDrop = {(e)=> this.onDrop(e)}
            onDragLeave = {this.onDragEnd}>
                {this.makeGroup()}
            </div>
        )
    }
}
export default Group