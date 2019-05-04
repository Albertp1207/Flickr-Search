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
        menuArr:[]
    }

    search = text => {
        let arr = text.split(" ");
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
            menuArr: [...this.state.menuArr,text]
        })
    }   
    render() {
        console.log(this.state)
        return (
            <div className="App">
                <Search search = {this.search} />
                <Catalog catalog = {this.state.catalog} />
                <Menu menuArr = {this.state.menuArr} />
                <Group />

            </div>
        );
    }
}


export default  Index;