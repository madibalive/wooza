import React, { Component } from "react";

class AccountPag extends Component {
  update = (key, value) => {
    Parse.User.set(key, value);
    Parse.User.save();
  };

  updateAvatar = () => {
    if (fileUploadControl.files.length > 0) {
      var file = fileUploadControl.files[0];
      var name = "photo.jpg";

      var parseFile = new Parse.File(name, file);
      parseFile
        .save()
        .then(data => {
          Parse.User.getcurrent().put("avatar",data);
        //   retun Parse.User.getcurrent().save();
        })
        .then(
          data => {},
          error => {
            // The file either could not be read, or could not be saved to Parse.
          }
        );
    }
  };

 

  render() {
    return (
      <div>
        <input type="file" id="profilePhotoFileUpload" />
        <img src="" alt=""/>

        
        
      </div>
    );
  }
}

export default AccountPag;
