import React from "react";
import { Link } from "react-router-dom";
import "../styles/editorDash.css";

class EditorDash extends React.Component {
  // state = {  }
  render() {
    return (
      <div>
        <div className="topic">Editor Dashboard</div>
        <div className="tab" id="tab1">
          <Link to={"/conference-management/conferences/list"}>
          Conference List
          </Link>
        </div>
        <div className="tab" id="tab2">
          <Link to={"/conference-management/conferences/add-conference"}>Add Conference</Link>
        </div>
      </div>
    );
  }
}

export default EditorDash;
