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
    index: 0
  };

  update = (key, value) => {
    Parse.User.set(key, value);
    Parse.User.save();
  };

  updateAvatar = () => {
    // if (fileUploadControl.files.length > 0) {
    //   var file = fileUploadControl.files[0];
    //   var name = "photo.jpg";
    //   var parseFile = new Parse.File(name, file);
    //   parseFile
    //     .save()
    //     .then(data => {
    //       Parse.User.getcurrent().put("avatar", data);
    //       //   retun Parse.User.getcurrent().save();
    //     })
    //     .then(
    //       data => {},
    //       error => {
    //         // The file either could not be read, or could not be saved to Parse.
    //       }
    //     );
    // }
  };

  render() {
    return (
      <Container>
        <Jumbotron className="back-trans">
          <h3>Account Manager</h3>
        </Jumbotron>
        <Row>
          <Col sm="12" md="6" lg="4">
            <h4 className=" font-weight-bold  mt-3">Profile Photo</h4>
            <h4>Ama Adjie k</h4>
            <p>joined 3 auguest,2015</p>
            <img src="" className="img img-fluid rounded-circular" alt="" />

            <p>Uploud a profile picture or choose one from your gallery</p>

            <input type="file" id="profilePhotoFileUpload" />
          </Col>
          <Col sm="12" md="6" lg="4">
            <h4 className=" font-weight-bold  mt-3">Payment Details</h4>
            <h5>Account Id </h5>
            <h5>Beasadasdadsa123124</h5>

            <p>current plan</p>

            <h4 className=" font-weight-bold  mt-3">
              GH 14.99
              <small class="text-muted">/ mo</small>
            </h4>
            <h4 className=" font-weight-bold  mt-3">
              <small class="text-muted">status</small>
              Active
            </h4>
            <h4 className=" font-weight-bold  mt-3">
              <small class="text-muted">day remaining</small>
              7 days *
            </h4>

            <button className="btn btn-outline">Upgrade Plan</button>
          </Col>
          <Col sm="12" md="6" lg="4">
            <h4 className=" font-weight-bold  mt-3">Account Details</h4>

            <div className="d-flex flex-row justify-content-between">
              <p className="">full name </p>
              <button className="btn btn-small btn-link">edit</button>
            </div>
            <h5 className="border my-1 p-1 ">madiba </h5>
            <div className="d-flex flex-row justify-content-between">
              <p className="">Email </p>
              <button className="btn btn-small btn-link">edit</button>
            </div>
            <h5 className="border my-1 p-1 ">madibafeed@outlook.com </h5>
            <div className="d-flex flex-row justify-content-between">
              <p className="">Passwood</p>
              <button className="btn btn-small btn-link">edit</button>
            </div>
            <h5 className="border my-1 p-1 ">******* </h5>

            <h4 className=" font-weight-bold  mt-3">Account Preference</h4>
            <p>language</p>
            <h5>english</h5>

            <button className="btn btn-link">Delete Account</button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AccountPag;
