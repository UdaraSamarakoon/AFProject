import React, { Component } from "react";
import ConferenceManagementDataService from "../services/Conference.service";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default class EditConference extends Component {
  constructor(props) {
    super(props);
    this.onChangeConferenceName = this.onChangeConferenceName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeStartingDate = this.onChangeStartingDate.bind(this);
    this.onChangeEndingDate = this.onChangeEndingDate.bind(this);
    this.onChangeVenue = this.onChangeVenue.bind(this);
    this.onChangeStartTime = this.onChangeStartTime.bind(this);
    this.onChangeOnlineLink = this.onChangeOnlineLink.bind(this);

    this.getConference = this.getConference.bind(this);
    this.updateValidity = this.updateValidity.bind(this);
    this.updateConference = this.updateConference.bind(this);
    this.deleteConference = this.deleteConference.bind(this);

    this.state = {
      currentConference: {
        id: null,
        conName: "" /*title*/,
        description: "" ,
        startDate:"",
        endDate:"",
        venue:"",
        startTime:"",
        onlineLink:"",
        // Id: "",
        validity: false,
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getConference(this.props.match.params.id);
  }

  onChangeConferenceName(e) {
    const conName = e.target.value;

    this.setState(function (prevState) {
      return {
        currentConference: {
          ...prevState.currentConference,
          conName: conName /* in here .policy = title */,
        },
      };
    });
  }
  onChangeDescription(e) {
    const description = e.target.value;//

    this.setState(function (prevState) {
      return {
        currentConference: {
          ...prevState.currentConference,
          description: description /* in here .policy = title */,
        },
      };
    });
  }

  onChangeStartingDate(e) {
    const startDate = e.target.value;//

    this.setState(function (prevState) {
      return {
        currentConference: {
          ...prevState.currentConference,
          startDate: startDate /* in here .policy = title */,
        },
      };
    });
  }

  onChangeEndingDate(e) {
    const endDate = e.target.value;//

    this.setState(function (prevState) {
      return {
        currentConference: {
          ...prevState.currentConference,
          endDate: endDate /* in here .policy = title */,
        },
      };
    });
  }
  onChangeVenue(e) {
    const venue = e.target.value;//

    this.setState(function (prevState) {
      return {
        currentConference: {
          ...prevState.currentConference,
          venue: venue /* in here .policy = title */,
        },
      };
    });
  }

  onChangeStartTime(e) {
    const startTime = e.target.value;//

    this.setState(function (prevState) {
      return {
        currentConference: {
          ...prevState.currentConference,
          startTime: startTime /* in here .policy = title */,
        },
      };
    });
  }

  onChangeOnlineLink(e) {
    const onlineLink = e.target.value;//

    this.setState(function (prevState) {
      return {
        currentConference: {
          ...prevState.currentConference,
          onlineLink: onlineLink /* in here .policy = title */,
        },
      };
    });
  }

  getConference(id) {
    ConferenceManagementDataService.get(id)
      .then((response) => {
        this.setState({
            currentConference: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateValidity(status) {
    var data = {
      id: this.state.currentConference.id,
      conName: this.state.currentConference.conName,
      description: this.state.currentConference.description,
      startDate: this.state.currentConference.startDate,
      endDate: this.state.currentConference.endDate,
      venue: this.state.currentConference.venue,
      startTime: this.state.currentConference.startTime,
      onlineLink: this.state.currentConference.onlineLink,
      validity: status,
    };

    ConferenceManagementDataService.update(this.state.currentConference.id, data)
      .then((response) => {
        this.setState((prevState) => ({
            currentConference: {
            ...prevState.currentConference,
            validity: status,
          },
        }));
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateConference() {
    ConferenceManagementDataService.update(
      this.state.currentConference.id,
      this.state.currentConference
    )
      .then((response) => {
        console.log(response.data);
        this.setState({
          message: "The Conference details was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteConference() {
    ConferenceManagementDataService.delete(this.state.currentConference.id)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/conference-management/conference");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentConference } = this.state;

    return (
      <div>
        {currentConference ? (
          //check
          <div className="toConferenceAddForm"> 
            <h4>Conferences</h4>
            <form>
              <div className="form-group">
                <label htmlFor="conName">Conference Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="conName"
                  value={currentConference.conName}
                  onChange={this.onChangeConferenceName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentConference.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label htmlFor="startDate">Starting Date</label>
                <input
                  type="text"
                  className="form-control"
                  id="startDate"
                  value={currentConference.startDate}
                  onChange={this.onChangeStartingDate}
                />
              </div>

              <div className="form-group">
                <label htmlFor="endDate">Ending Date</label>
                <input
                  type="text"
                  className="form-control"
                  id="endDate"
                  value={currentConference.endDate}
                  onChange={this.onChangeEndingDate}
                />
              </div>

              <div className="form-group">
                <label htmlFor="venue">Venue</label>
                <input
                  type="text"
                  className="form-control"
                  id="venue"
                  value={currentConference.venue}
                  onChange={this.onChangeVenue}
                />
              </div>

              <div className="form-group">
                <label htmlFor="startTime">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="startTime"
                  value={currentConference.startTime}
                  onChange={this.onChangeStartTime}
                />
              </div>
            
              <div className="form-group">
                <label htmlFor="onlineLink">Online Link</label>
                <input
                  type="text"
                  className="form-control"
                  id="onlineLink"
                  value={currentConference.onlineLink}
                  onChange={this.onChangeOnlineLink}
                />
              </div>           
            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteConference}
            >
              Remove
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateConference}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a conference...</p>
          </div>
        )}
      </div>
    );
  }
}
