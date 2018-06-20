import React from "react";

const FooterPage = () => {
  return (
    <footer className="footer">
      <div className=" p-2">
        <div class="row">
          <div class="col-md-12 col-sm-12 ">
            <div class="footerUpper">
              <div class="footerLogo text-center">
                <h2 className="font-weight-bold">INKAYi</h2>
              </div>
              <div class="footerSocialNetwork d-flex flex-row justify-content-center align-items-center">
                <a title="facebook" target="_blank">
                  <i className=" fa fa-facebook fa-2x p-4" />
                </a>
                <a title="twitter" target="_blank" href="">
                  <i className=" fa fa-twitter fa-2x p-4" />
                </a>
                <a title="instagram" target="_blank"
                  <i className=" fa fa-instagram fa-2x p-4" />
                </a>
                <a title="youtube" target="_blank">
                  <i className=" fa fa-youtube fa-2x p-4" />
                </a>
              </div>
            </div>
          </div>
          <div class=" col-sm-12 col-md-12 p-4 ">
            <div className="text-center">
              <a class="footerLinksInner">Terms and Conditions</a>
              <a class="footerLinksInner">Contact us</a>
              <a class="footerLinksInner">General Rules</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
