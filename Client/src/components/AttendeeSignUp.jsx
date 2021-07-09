import React, { Component } from "react";
import AttendeeSignUpDataService from "../services/Attendee.service";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
// import "../";

export default class AddAttendee extends Component {
  constructor(props) {
    super(props);
    this.onChangeAttendeeName = this.onChangeAttendeeName.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeNic = this.onChangeNic.bind(this);
    this.onChangeGender= this.onChangeGender.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
    this.onChangePaymentMethod = this.onChangePaymentMethod.bind(this);
    this.onChangeCardholderName = this.onChangeCardholderName.bind(this);
    this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
    this.onChangeExpiryDate = this.onChangeExpiryDate.bind(this);
    this.onChangeCVV = this.onChangeCVV.bind(this);

    // this.onChangeId = this.onChangeId.bind(this);
    this.saveAttendee = this.saveAttendee.bind(this);
    this.newAttendee = this.newAttendee.bind(this);

    this.state = {
      id: null,
      attendeeName: "" /*title*/,
      contact: "" ,
      nic:"",
      gender:"",
      address:"",
      email:"",
      dateofbirth:"",
      paymentMethod:"",
      cardholderName:"",
      expiryDate:"",
      cVV:"",

      validity: false,
      submitted: false,

    };

  }

  onChangeAttendeeName(e) {
    this.setState({
      attendeeName: e.target.value

    });
  }

  onChangeContact(e) {
    this.setState({
      contact: e.target.value

    });
  }

  onChangeNic(e) {
    this.setState({
      nic: e.target.value

    });
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value

    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value

    });
  }

  onChangeDateOfBirth(e) {
    this.setState({
        dateofbirth: e.target.value

    });
  }

  onChangePaymentMethod(e) {
    this.setState({
        paymentMethod: e.target.value

    });
  }

  onChangeCardholderName(e) {
    this.setState({
        cardholderName: e.target.value

    });
  }

  onChangeCardNumber(e) {
    this.setState({
        cardNumber: e.target.value

    });
  }

  onChangeExpiryDate(e) {
    this.setState({
        expiryDate: e.target.value

    });
  }

  onChangeCVV(e) {
    this.setState({
        cVV: e.target.value

    });
  }


  saveAttendee() {
    var data = {
      attendeeName: this.state.attendeeName,
      contact: this.state.contact,   
      nic: this.state.nic,
      gender: this.state.gender,
      address: this.state.address,
      email: this.state.email,// check
      dateofbirth: this.state.dateofbirth,
      paymentMethod: this.state.paymentMethod,
      cardholderName: this.state.cardholderName,
      cardNumber: this.state.cardNumber,
      expiryDate: this.state.expiryDate,
      cVV: this.state.cVV

    };

    AttendeeSignUpDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          attendeeName: response.data.attendeeName,
          contact: response.data.contact,
          nic: response.data.nic,
          gender: response.data.gender,
          address: response.data.address,
          email: response.data.email,
          dateofbirth: response.data.dateofbirth,
          paymentMethod: response.data.paymentMethod,
          cardholderName: response.data.cardholderName,
          cardNumber: response.data.cardNumber,
          expiryDate: response.data.expiryDate,
          cVV: response.data.cVV,
          validity: response.data.validity,

          submitted: true

        });

        console.log(response.data);

      })
      .catch((e) => {
        console.log(e);

      });
  }

  newAttendee() {
    this.setState({
      id: null,
      attendeeName:"", /*title*/
      contact:"",
      nic:"",
      gender:"",
      address:"",
      email:"",
      dateofbirth:"",
      paymentMethod:"",
      cardholderName:"",
      cardNumber:"",
      expiryDate:"",
      cVV:"",

      validity: false,
      submitted: false

    });
  }

    
  render() {
    return (
        // for css
      <div className="toAttendeeAddForm">  
          {this.state.submitted ? (
            <div>
                <h4>New attendee added successfully!</h4>
                <button className="btn btn-success" onClick={this.newAttendee}>
                  Add a new attendee
                </button>
            </div>
            ) : (
            <div>
              <div className="left">
              <div className="form-group">
                <label htmlFor="attendeeName">Attendee Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="attendeeName"
                    required
                    value={this.state.attendeeName}
                    onChange={this.onChangeAttendeeName}
                    name="attendeeName"
                  />
              </div>

              <div className="form-group">
                <label htmlFor="contact">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  required
                  value={this.state.contact}
                  onChange={this.onChangeContact}
                  name="contact"
                  placeholder="123-456-789"
                  // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                />
              </div>

              
              {/* <form>
              <label htmlfor="profession">Profession : </label>
                              <select name="prof" id="profession">
                                  <optgroup label="Skilled Labours">
                                      <option value="Admin">Administrator </option>
                                      <option value="AssiAdmin">A .Administrator </option>
                                      <option value="StoreK">Store Keeper </option>
                                      <option value="veterinarian">Veterinarian </option>
                                  </optgroup>
                                      <optgroup label="Semi-Skilled Labours">
                                      <option value="Driver">Driver</option>
                                      <option value="Farmer">Labour</option>
                                      <option value="Security">Security Guard</option>

                                  </optgroup>
                              </select>
                              </form>
                              <input
                  type="text"
                  className="form-control"
                  id="profession"
                  required
                  value={this.state.profession}
                  onChange={this.onChangeProfession}
                  name="profession"
                />
              </div> */}
              

              <div className="form-group">
                <label htmlFor="nic">NIC</label>
                <input
                  type="text"
                  className="form-control"
                  id="nic"
                  required
                  value={this.state.nic}
                  onChange={this.onChangeNic}
                  name="nic"
                  placeholder="123-456-789-V"
                  // pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}-[V]"
                />
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                  <input
                    type="text"
                    className="form-control"
                    id="gender"
                    required
                    value={this.state.gender}
                    onChange={this.onChangeGender}
                    name="gender"
                  />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    required
                    value={this.state.address}
                    onChange={this.onChangeAddress}
                    name="address"
                  />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    required
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    name="email"
                    placeholder="name@gmail.com"
                  />                  
              </div>
              
              <div className="form-group">
                <label htmlFor="dateofbirth">Date of Birth</label>
                  <input
                    type="text"
                    className="form-control"
                    id="dateofbirth"
                    required
                    value={this.state.dateofbirth}
                    onChange={this.onChangeDateOfBirth}
                    name="dateofbirth"
                  />                  
              </div>
            </div>

            <div className="Right">
              <div className="form-group">
                <label htmlFor="paymentMethod">Payment Method</label>
                  <input
                    type="text"
                    className="form-control"
                    id="paymentMethod"
                    required
                    value={this.state.paymentMethod}
                    onChange={this.onChangePaymentMethod}
                    name="paymentMethod"
                  />
              </div>

              
              <div className="form-group">
                <label htmlFor="cardholderName">Cardholder's name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardholderName"
                    required
                    value={this.state.cardholderName}
                    onChange={this.onChangeCardholderName}
                    name="cardholderName"
                  />
              </div>

              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    required
                    value={this.state.cardNumber}
                    onChange={this.onChangeCardNumber}
                    name="cardNumber"
                  />
              </div>
              

              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                  <input
                    type="text"
                    className="form-control"
                    id="expiryDate"
                    required
                    value={this.state.expiryDate}
                    onChange={this.onChangeExpiryDate}
                    name="expiryDate"
                  />
              </div>

              <div className="form-group">
                <label htmlFor="cVV">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cVV"
                    required
                    value={this.state.cVV}
                    onChange={this.onChangeCVV}
                    name="cVV"
                  />
              </div>
            </div>

              

              {/* <div className="form-group">
                <label htmlFor="batchId">Batch Id</label>
                <input
                  type="text"
                  className="form-control"
                  id="Id"
                  required
                  value={this.state.batchId}
                  onChange={this.onChangeId}
                  name="batchId"
                />
              </div> */}

              <button onClick={this.saveAttendee} className="btn btn-success">
                Add details
              </button>
            </div>
          )}
      </div>
    );
  }
}
