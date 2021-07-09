import http from "../http-common";

class AttendeeSignUpDataService {

 //New Researcher Services

  create(data) {
    return http.post("/Attendee-SignUp/add-attendee-details", data);
  }

 
}

export default new AttendeeSignUpDataService();
