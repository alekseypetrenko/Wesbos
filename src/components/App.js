import React from "react";
import Header from "./Header"
import Order from "./Order"
import Inventory from "./Inventory"
import sampleFishes from "../sample-fishes"
import Fish from "./Fish"

class App extends React.Component {
    state = {
        fishes: {},
        order:{}
    };
    addFish = fish => {
        // 1. Take a copy of exsisting state
        const newFishes = {...this.state.fishes};
        // 2. Add our new fish to that fishes variable
        newFishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({
            fishes: newFishes 
        })

    }
    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        })
    }
    
    addToOrder = key => {
        const newOrder = {...this.state.order};
        newOrder[key] = newOrder[key] + 1 || 1;
        this.setState({
            order: newOrder
        })
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish 
                            key={key} 
                            index = {key}
                            addToOrder = {this.addToOrder}
                            details={this.state.fishes[key]}/>
                        )}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
            </div>
        )
    }
}

export default App;