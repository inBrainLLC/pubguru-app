import React, { Component } from "react";

class Linebar extends Component {


  render() {
    return (

        <div>
        <div class="vl1" style={{height: this.props.value1+"px"}}></div>
        <div class="vl2" style={{height: this.props.value2+"px"}}></div>
         {this.props.name}
     

        </div>
      
    );
  }
}

export default Linebar;
