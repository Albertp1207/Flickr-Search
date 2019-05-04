import React from "react";

const makeMenu = (arr,cl) => {
    if(arr.length === 0) {
        return <label>Menu is empty</label>
    }
    return arr.map(el => <button onClick={cl} key={el} groupname = {el}>{el}</button>)
}
export default props => {
    return (
        <div id = "Menu">
            {makeMenu(props.menuArr,props.click)}
        </div>
    )
}