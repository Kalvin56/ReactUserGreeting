import React, { Component} from "react";
import ReactUserGreeting from "./ReactUserGreeting";

class App extends Component{
  render(){
    return(
      <div>
        <h1> Hello, World! </h1>
        <ReactUserGreeting name="Michel" />
      </div>
    );
  }
}

export default App;