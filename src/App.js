import React, {Component} from "react"
import MemGenerator from "./mem/MemGenerator"
import Header from "./mem/Header"

class App extends Component {
    render(){
        return (
            <div>
                 <Header />
                 <MemGenerator/>
                 <h1 className="fun">This is App</h1>
             </div>
        )
    }
}

export default App
