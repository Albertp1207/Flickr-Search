import React,{Component} from 'react';

import Search from "./Search";
import Catalog from "./Catalog";
import Group from "./Group";
import Menu from "./Menu";

function fetchPhotos (text){
    return fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=847b43221e688059973358acc1294ba5&per_page=5&text="+text)
        .then(res=>res.json())
}

class Index extends Component {
    state = {
        catalog: {},
        menuArr:[],
        activeGroup: null
    }

    search = text => {
        let arr = text.split(" ");
        this.setState({
            catalog: {},
            menuArr:[]
        })
        arr.forEach(text => {            
            fetchPhotos(text)
                .then(data => {
                    let photos = data.photos.photo
                    // catalog.push(photos)
                    this.setState({
                        catalog: Object.assign({},this.state.catalog,{[text]:photos})
                    })
                })
        })
        this.setState({
            menuArr: [...arr]
        })
    }   

    click = e => {
        let name = e.target.getAttribute("groupname");
        this.setState({
            activeGroup:name
        })
    }

    delete = (groupName,i) => {
        let catalog = Object.assign({},this.state.catalog);
        catalog[groupName].splice(i,1)
        this.setState({
            catalog
        })
    }
    render() {
        console.log(this.state)
        return (
            <div className="App">
                <Search search = {this.search} />
                <Catalog catalog = {this.state.catalog} />
                <Menu click = {this.click} menuArr = {this.state.menuArr} />
                <Group delete={this.delete} all = {this.state.catalog} activeGroup = {this.state.activeGroup} />

            </div>
        );
    }
}


export default  Index;