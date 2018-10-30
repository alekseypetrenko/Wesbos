import React from "react";
import Header from "./Header"
import Order from "./Order"
import Inventory from "./Inventory"

class App extends React.Component {
    state = {
        fishes: {},
        order:{}
    };
    addFish = fish => {
        // 1. Take a cope of exsisting state
        const newFishes = {...this.state.fishes};
        // 2. Add our new fishe to that fishes variable
        newFishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({
            fishes: newFishes
        })

    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                </div>
                <Order />
                <Inventory addFish={this.addFish}/>
            </div>
        )
    }
}

export default App;