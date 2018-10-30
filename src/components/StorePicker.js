import React from "react";
import {getFunName} from "../helpers"

class StorePicker extends React.Component {
    myInput = React.createRef();
    goToStore = event => {
        // 1. Stop the form from submiting
        event.preventDefault();
        // 2. Get the text from the input
        const storeName = this.myInput.value.value;
        // 3. Change the URL to /store/what ever entered
        this.props.history.push(`/store/${storeName}`)
    }
    render() {
        return (
            <form action="" className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter A Store</h2>
                <button >Click me!</button>
                <input type="text" ref={this.myInput} required placeholder="Store Enter" defaultValue={getFunName()}/>
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker;