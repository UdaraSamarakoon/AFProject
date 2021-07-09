import React, { Component } from "react";
import ConferenceManagementDataService from "../services/Conference.service";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default class ConferenceList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchConferenceName = this.onChangeSearchConferenceName.bind(this);
    this.retrieveConferences = this.retrieveConferences.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.removeAllConferences = this.removeAllConferences.bind(this);
    this.searchConferenceName = this.searchConferenceName.bind(this);

    this.state = {
        conferece: [],
      // currentEmployee: null,
      currentIndex: -1,
      searchConferenceName: "",
    };
  }

  componentDidMount() {
    this.retrieveConferences();
  }

  onChangeSearchConferenceName(e) {
    const searchConferenceName = e.target.value;

    this.setState({
        searchConferenceName: searchConferenceName,
    });
  }

  retrieveConferences() {
    ConferenceManagementDataService.getAll()
      .then((response) => {
        this.setState({
            conferece: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveConferences();
    this.setState({
      // currentEmployee: null,
      currentIndex: -1,
    });
  }

  removeAllConferences() {
    ConferenceManagementDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  searchConferenceName() {
    ConferenceManagementDataService.findByConferenceName(this.state.searchConferenceName)
      .then((response) => {
        this.setState({
            conferece: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const {
        searchConferenceName,
        conferece,
      // currentConference,
      currentIndex,
    } = this.state;

    return(
      <div className="list row">
        <div className="topic">Conference Management</div>
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
            type="text"
            className="form-control"
            placeholder="Search by Conference Name"
            value={searchConferenceName}
            onChange={this.onChangeSearchConferenceName}
            />
            <div className="input-group-append">
              <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.searchConferenceName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
          
        <div className="col-md-6">
          <div className="topic2"><h4>Conference List</h4></div>
          <ul className="list-group">
            {conferece &&
              //need to check
              conferece.map((con, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  
                    key={index}
                >
                  <Link to={"/Attendee-SignUp/add-conference-details/list/" + con.id}>{con.conName}</Link>
                </li>
              ))
            }
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllConferences}
          >
            Remove All Conferences
          </button>
          <Link
            //check this
            to={"/Attendee-SignUp/add-conference-details"}
            className="badge badge-warning"
          >
            Add Conference
          </Link>
        </div>
      </div>  
    );
  }
}
