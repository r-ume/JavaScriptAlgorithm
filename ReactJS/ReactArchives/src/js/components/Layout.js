import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component{

  constructor(){
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title){
    // same as this.setState({title: title})
    this.setState({title});
  }

  // When you would like to pass functions, you should bind it to this.
  render() {
    return (
      <div>
        <Header changeTitle = {this.changeTitle.bind(this)} title = {this.state.title} />
        <Footer />
      </div>
    );
  }
}