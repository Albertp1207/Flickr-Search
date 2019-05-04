import React from "react";

const makeMenu = (arr,cl,t) => {
    if(arr.length === 0) {
        return <label>Menu is empty</label>
    }
    return arr.map(el => <button onClick={cl} key={el+t} groupname = {el}>{el}</button>)
}
export default props => {
    return (
        <div id = "Menu">
            {makeMenu(props.menuArr,props.click,props.text)}
        </div>
    )
}