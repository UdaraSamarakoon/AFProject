import React from "react";
import { Link } from "react-router-dom";
import ConferenceManagementDataService from "../services/Conference.service";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

class ConferenceProfile extends React.Component {
    constructor(props) {
        super(props);
        this.getConference = this.getConference.bind(this);

        this.state = {
            currentConference: [],
        }
    }

    componentDidMount() {
        this.getConference(this.props.match.params.id);
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

    render() { 
        const { currentConference } = this.state;
        return ( 
            <div className="col-md-7">
                {currentConference ? (
                    <div>
                        <h4><strong>Conference Details</strong></h4>
                        <br></br>
                        <div>
                            <label>
                            <strong>Conference Name:</strong>
                            </label>{" "}
                            {currentConference.conName} 
                        </div>
                        <div>
                            <label>
                            <strong>Description :</strong>
                            </label>{" "}
                            {currentConference.description} 
                        </div>
                        <div>
                            <label>
                            <strong>Starting Date :</strong>
                            </label>{" "}
                            {currentConference.startDate} 
                        </div>
                        <div>
                            <label>
                            <strong>Ending Date :</strong>
                            </label>{" "}
                            {currentConference.endDate} 
                        </div>
                        <div>
                            <label>
                            <strong>Venue :</strong>
                            </label>{" "}
                            {currentConference.venue} 
                        </div>
                        <div>
                            <label>
                            <strong>Starting Time :</strong>
                            </label>{" "}
                            {currentConference.startTime} 
                        </div>
                        <div>
                            <label>
                            <strong>Url :</strong>
                            </label>{" "}
                            {currentConference.onlineLink} 
                        </div>

                        <Link
                            to={"/conference-management/conferences/list/:id/:id" + currentConference.id}
                            className="badge badge-warning"
                        >
                            Edit Conference Details                        
                        </Link> 

                    </div>
                    ) : (
                        <p></p>
                        
                    )
                }    
            </div>
        );
    }
}
 
export default ConferenceProfile;