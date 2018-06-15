import React, { Component } from "react";
import { Parse } from "parse";
import "./style.css";

import {
  Container,
  CarouselCaption,
  CarouselItem,
  UncontrolledCarousel,
  Row,
  Col,
  Button,
  Jumbotron
} from "reactstrap";
class AccountPag extends Component {
  state = {
    index: 0,
    file: null
  };

  update = (key, value) => {
    Parse.User.set(key, value);
    Parse.User.save();
  };
  onChange = e => {
    this.setState({ file: e.target.files[0] });
    alert(this.state.file);
  };

  updateAvatar = () => {
    if (this.state.file) {
      var name = "photo.jpg";
      var parseFile = new Parse.File(name, this.state.file);
      parseFile
        .save()
        .then(data => {
          Parse.User.current().set("avatar", data);
          return Parse.User.current().save();
        })
        .then(
          data => {
            alert("done");
          },
          error => {
            alert(error);
            // The file either could not be read, or could not be saved to Parse.
          }
        );
    }
  };

  render() {
    return (
      <Container>
        <Jumbotron className="back-trans">
          <h3>Account Manager</h3>
        </Jumbotron>
        <Row>
          <Col sm="12" md="6" lg="4">
            <h4 className="  border-bottom  mt-3">Profile Photo</h4>
            <h4 className="text-white">Ama Adjie k</h4>
            <p>joined 3 auguest,2015</p>
            <img
              src={Parse.User.current()
                .get("avatar")
                .url()}
              className="img img-fluid rounded-circle"
              style={{}}
              alt=""
            />

            <p>Uploud a profile picture or choose one from your gallery</p>

            <input
              className="fadedbutton text-white"
              type="file"
              id="profilePhotoFileUpload"
              onChange={event => this.onChange(event)}
            />
            <button
              onClick={() => this.updateAvatar()}
              className="btn my-2 fadedbutton text-white "
            >
              uploud
            </button>
          </Col>
          <Col sm="12" md="6" lg="4">
            <h4 className="  border-bottom my-3">Payment Details</h4>
            <h5>Account Id </h5>
            <h5 className="text-white">Beasadasdadsa123124</h5>

            <p>current plan</p>

            <h4 className=" font-weight-bold text-white  mt-3">
              GH 14.99
              <small class="text-muted">/ mo</small>
            </h4>
            <h4 className=" font-weight-bold text-white mt-3">
              <small class="text-muted">status </small>
              Active
            </h4>
            <h4 className=" font-weight-bold text-white mt-3">
              <small class="text-muted">day remaining </small>
              7 days *
            </h4>

            <button className="btn btn-primary">Upgrade Plan</button>
          </Col>
          <Col sm="12" md="6" lg="4">
            <h4 className="border-bottom   my-3">Account Details</h4>

            <div className="d-flex flex-row justify-content-between">
              <p className="">full name </p>
              <button className="btn btn-small btn-link">edit</button>
            </div>
            <h5 className="border-bottom mb-2 p-1  text-white">madiba </h5>
            <div className="d-flex flex-row justify-content-between">
              <p className="">Email </p>
              <button className="btn btn-small btn-link">edit</button>
            </div>
            <h5 className="border-bottom mb-2 p-1  text-white">
              madibafeed@outlook.com{" "}
            </h5>
            <div className="d-flex flex-row justify-content-between">
              <p className="">Passwood</p>
              <button className="btn btn-small btn-link">edit</button>
            </div>
            <h5 className="border-bottom mb-2 p-1  text-white">******* </h5>

            <h4 className="border-bottom font-weight-bold  mt-3">
              Account Preference
            </h4>
            <p>language</p>
            <h5 className="text-white">english</h5>

            <button className="btn fadedbutton mx-auto font-weight-bold  text-white">
              Delete Account
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AccountPag;
