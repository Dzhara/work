//GLOBAL imports
import React, { Component } from "react";
//LOCAL imports
import CommentsContainer from "./main/comment/containers/CommentsContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CommentsContainer />
      </div>
    );
  }
}

export default App;
