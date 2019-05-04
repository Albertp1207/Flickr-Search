import React,{Component} from "react";

class Picture extends Component{
    onDragStart = (ev,id) => {
        console.log("DRSTART",id)
        ev.dataTransfer.setData("id",id)
    }
    render() {
            const {groupName,options} = this.props;
            const {farm,server,id,secret} = options;
            return (
                <div
                        onDragStart = {(e) => this.onDragStart(e,id)}
                        draggable
                        groupname = {groupName}
                        className="draggable picture"
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