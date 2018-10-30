import React from "react";
import {getFunName} from "../helpers"

class StorePicker extends React.Component {
    handleClick(){
        console.log(1);
    }
    render() {
        console.log(this)
        return (
            <form action="" className="store-selector">
                <h2>Please enter A Store</h2>
                <button onClick={this.handleClick}>Click me!</button>
                <input type="text"required placeholder="Store Enter" defaultValue={getFunName()}/>
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker;