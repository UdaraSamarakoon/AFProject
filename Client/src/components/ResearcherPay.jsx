import React, { Component } from "react";
import ResearcherPayDataService from "../services/ResearcherPay.service";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
// import "../";

export default class ResearchPay extends Component {
  constructor(props) {
    super(props);
    this.onChangePaymentMethod = this.onChangePaymentMethod.bind(this);
    this.onChangeCardholderName = this.onChangeCardholderName.bind(this);
    this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
    this.onChangeExpiryDate = this.onChangeExpiryDate.bind(this);
    this.onChangeCVV = this.onChangeCVV.bind(this);

    // this.onChangeId = this.onChangeId.bind(this);
    this.savePay = this.savePay.bind(this);
    this.newPay = this.newPay.bind(this);

    this.state = {
      id: null,
      paymentMethod:"",
      cardholderName:"",
      expiryDate:"",
      cVV:"",

      validity: false,
      submitted: false,

    };

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


  savePay() {
    var data = {
      paymentMethod: this.state.paymentMethod,
      cardholderName: this.state.cardholderName,
      cardNumber: this.state.cardNumber,
      expiryDate: this.state.expiryDate,
      cVV: this.state.cVV

    };

    ResearcherPayDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
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

  newPay() {
    this.setState({
      id: null,
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
      <div className="toResearcherPay">  
          {this.state.submitted ? (
            <div>
                <h4>Payment Successfull</h4>
                <button className="btn btn-success" onClick={this.newPay}>
                  Back to My Dashborad
                </button>
            </div>
            ) : (
            <div>           
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
              <button onClick={this.savePay} className="btn btn-success">
                Make Payment
              </button>
            </div>
          )}
      </div>
    );
  }
}
