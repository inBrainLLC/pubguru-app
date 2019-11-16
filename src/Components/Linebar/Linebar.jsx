import React, { Component } from "react";

class Linebar extends Component {


  render() {
    return (

        <div>
          <div class='wrapper'>

            <div class="vl1" style={{height: this.props.value1+"px",  background:'gray',
  float: 'left'}}></div>
             <div class="vl2" style={{height: this.props.value2+"px",  background:'#3FC0E8',
  float: 'left'}}></div>
         {this.props.name}
         </div>

        </div>
      
    );
  }
}

export default Linebar;
