import React from "react";

const makeMenu = (arr) => {
    if(arr.length === 0) {
        return <label>Menu is empty</label>
    }
    return arr.map(el => <button key={el} groupname = {el}>{el}</button>)
}
export default props => {
    console.log(props)
    return (
        <div id = "Menu">
            {makeMenu(props.menuArr)}
        </div>
    )
}