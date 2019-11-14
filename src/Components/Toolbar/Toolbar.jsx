import React, { Component } from "react";
import { Button } from "antd";

class Toolbar extends Component {
  render() {
    return (
        <div>
          <hr />
          <div className="report-buttons">
            <Button>How To Implement PubGuru Data Guard</Button>
            <Button>How To Test PubGuru Data Guard</Button>
          </div>
        </div>
    );
  }
}

export default Toolbar;
