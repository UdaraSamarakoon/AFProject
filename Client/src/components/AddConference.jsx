import React, { Component } from "react";
import ConferenceManagementDataService from "../services/Conference.service";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
// import "../";

export default class AddConference extends Component {
  constructor(props) {
    super(props);
    this.onChangeConferenceName = this.onChangeConferenceName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeStartingDate = this.onChangeStartingDate.bind(this);
    this.onChangeEndingDate= this.onChangeEndingDate.bind(this);
    this.onChangeVenue = this.onChangeVenue.bind(this);
    this.onChangeStartTime = this.onChangeStartTime.bind(this);
    this.onChangeOnlineLink = this.onChangeOnlineLink.bind(this);
   

    // this.onChangeId = this.onChangeId.bind(this);
    this.saveConference = this.saveConference.bind(this);
    this.newConference = this.newConference.bind(this);

    this.state = {
      id: null,
      conName: "" /*title*/,
      description: "" ,
      startDate:"",
      endDate:"",
      venue:"",
      startTime:"",
      onlineLink:"",
      
      validity: false,
      submitted: false,
    };
  }

  onChangeConferenceName(e) {
    this.setState({
        conName: e.target.value

    });
  }

  onChangeDescription(e) {
    this.setState({
        description: e.target.value

    });
  }

  onChangeStartingDate(e) {
    this.setState({
        startDate: e.target.value

    });
  }

  onChangeEndingDate(e) {
    this.setState({
        endDate: e.target.value
    });
  }

  onChangeVenue(e) {
    this.setState({
        venue: e.target.value

    });
  }

  onChangeStartTime(e) {
    this.setState({
        startTime: e.target.value

    });
  }

  onChangeOnlineLink(e) {
    this.setState({
        onlineLink: e.target.value

    });
  }

  saveConference() {
    var data = {
        conName: this.state.conName,
        description: this.state.description,   
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        venue: this.state.venue,
        startTime: this.state.startTime,// check
        onlineLink: this.state.onlineLink,

    };

    ConferenceManagementDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          conName: response.data.conName,
          description: response.data.description,
          startDate: response.data.startDate,
          endDate: response.data.endDate,
          venue: response.data.venue,
          startTime: response.data.startTime,
          onlineLink: response.data.onlineLink,
          
          validity: response.data.validity,

          submitted: true

        });

        console.log(response.data);

      })
      .catch((e) => {
        console.log(e);

      });
  }

  newConference() {
    this.setState({
      id: null,
      conName:"", /*title*/
      description:"",
      startDate:"",
      endDate:"",
      venue:"",
      startTime:"",
      onlineLink:"",

      validity: false,
      submitted: false

    });
  }

    
  render() {
    return (
        // for css
      <div className="toConferenceAddForm">  
          {this.state.submitted ? (
            <div>
                <h4>New conference added successfully!</h4>
                <button className="btn btn-success" onClick={this.newConference}>
                  Add a new conference
                </button>
            </div>
            ) : (
            <div>
              <div className="left">
              <div className="form-group">
                <label htmlFor="conName">Conference Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="conName"
                    required
                    value={this.state.conName}
                    onChange={this.onChangeConferenceName}
                    name="conName"
                  />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  name="description"  
                />
              </div>              

              <div className="form-group">
                <label htmlFor="startDate">Starting Date</label>
                <input
                  type="text"
                  className="form-control"
                  id="startDate"
                  required
                  value={this.state.startDate}
                  onChange={this.onChangeStartingDate}
                  name="startDate"
                />
              </div>

              <div className="form-group">
                <label htmlFor="endDate">Ending Date</label>
                  <input
                    type="text"
                    className="form-control"
                    id="endDate"
                    required
                    value={this.state.endDate}
                    onChange={this.onChangeEndingDate}
                    name="endDate"
                  />
              </div>

              <div className="form-group">
                <label htmlFor="venue">Venue</label>
                  <input
                    type="text"
                    className="form-control"
                    id="venue"
                    required
                    value={this.state.venue}
                    onChange={this.onChangeVenue}
                    name="venue"
                  />
              </div>

              <div className="form-group">
                <label htmlFor="startTime">Starting Time</label>
                  <input
                    type="text"
                    className="form-control"
                    id="startTime"
                    required
                    value={this.state.startTime}
                    onChange={this.onChangeStartTime}
                    name="startTime"
                    
                  />                  
              </div>
              
              <div className="form-group">
                <label htmlFor="onlineLink">Online Link</label>
                  <input
                    type="text"
                    className="form-control"
                    id="onlineLink"
                    required
                    value={this.state.onlineLink}
                    onChange={this.onChangeOnlineLink}
                    name="onlineLink"
                  />                  
              </div>
            </div>

              <button onClick={this.saveConference} className="btn btn-success">
                Add Conference details
              </button>
            </div>
          )}
      </div>
    );
  }
}
