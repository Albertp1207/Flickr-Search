import React,{Component} from "react";

class Picture extends Component{
    state = {
        classes:""
    }
    onDragStart = (ev,id,groupName) => {
        ev.dataTransfer.setData("id",id)
        ev.dataTransfer.setData("groupName",groupName)
        this.setState({
            classes:"active"
        })

    }
    onDragEnd = () => {
        this.setState({
            classes:""
        })
    }
    render() {
            const {groupName,options} = this.props;
            const {farm,server,id,secret} = options;
            return (
                <div
                        className={this.state.classes}
                        onDragStart = {(e) => this.onDragStart(e,id,groupName)}
                        onDragEnd = {this.onDragEnd}
                        draggable = {this.props.draggable}
                        groupname = {groupName}
                        className={"draggable picture "+this.state.classes}
                        >
                        <img src = {`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} />
                    </div>
            )
        }
}

export default Picture


// {
//     const {groupName,options} = this.props;
//     const {farm,server,id,secret} = options;
//     return (
//         <div
//                 onDragStart = {(e) => this.onDragStart(e,"PICTURE1")}
//                 draggable
//                 className="draggable "
//                 style={{backgroundColor:"green"}}>
//                 <img src = {`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} />
//             </div>
//     )
// }