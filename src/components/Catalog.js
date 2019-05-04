import React from "react"
import Picture from "./Picture"

const makeCatalog = (catalog) => {
    let res = []
    for(let key in catalog) {
        catalog[key].forEach(el=>{
            res.push(<Picture draggable = {true} key ={el.id} groupName = {key} options={el}/>)
        })
    }
    
    if(res.length === 0) {
        return <p>Catalog is empty</p>
    }
    return res
}

export default props => {
    return (
        <div className = "catalog">
            {makeCatalog(props.catalog)}
        </div>
    )
}