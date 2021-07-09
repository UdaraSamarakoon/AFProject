import React from "react";
import { Link } from "react-router-dom";
import "../styles/sideNav.css";


class SideNav extends React.Component {
  // state = {  }
  render() {
    return (
      <div>
        <div className="sideNav">
          <Link to="/conference-management/conferences">DASHBOARD</Link>  
          <br />
          <Link to="/conference-management/conferences/list">Conference Management</Link>
          <br />
          <Link to="/conference-management/conferences/add-conference">Add Conference</Link>
          <br />       
          
        </div>
      </div>
    );
  }
}

export default SideNav;
