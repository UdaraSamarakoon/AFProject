import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import SideNav from "./components/SideNav";
import AddAttendee from "./components/AttendeeSignUp";
import ResearchPay from "./components/ResearcherPay";
import AddConference from "./components/AddConference";
import EditConference from "./components/EditConference";
import ConferenceList from "./components/ConferenceList";
import ConferenceProfile from "./components/ConferenceDetails";
import EditorDash from "./components/EditorDash";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/Attendee-SignUp" component={Header} />
        <Route path="/Attendee-SignUp" component={SideNav} />
        <Route path="/conference-management" component={SideNav} />
        <Route path="/conference-management" component={Header} />

        <Switch>
        <Route
            exact
            path="/conference-management/conferences"  //check
            component={EditorDash}
            />
          <Route
              exact
              path="/Attendee-SignUp/add-attendee-details"  //check
              component={AddAttendee}
            />    
            <Route
              exact
              path="/Attendee-SignUp/Research-pay"  //check
              component={ResearchPay}
            /> 
             <Route
              exact
              path="/conference-management/conferences/add-conference"  
              component={AddConference}
            /> 
            <Route
            exact
            path="/conference-management/conferences/list"  
            component={ConferenceList}
            />
            <Route
              exact
              path="/conference-management/conferences/list/:id/:id"  
              component={EditConference}
            /> 
            <Route
              exact
              path="/conference-management/conferences/list/:id"  
              component={ConferenceProfile}
            /> 
        </Switch>
      </div>
    );
  }
}

export default App;
