import http from "../http-common";

class ResearcherPayDataService {

  //Create Researcher, Research Paper payment Services
    create(data) {
    return http.post("/Attendee-SignUp/Research-pay", data);
  }

 
}

export default new ResearcherPayDataService();
