import React from "react";

const FooterPage = () => {
  return (
    <footer className="footer">
      <div className=" p-2">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-12 ">
            <p>
              Made by <a href="http://thomaspark.co">Thomas Park</a>
            </p>
            <p>
              Code released under the{" "}
              <a href="https://github.com/thomaspark/bootswatch/blob/master/LICENSE">
                MIT License
              </a>.
            </p>
            <p>
              Based on{" "}
              <a href="https://getbootstrap.com" rel="nofollow">
                Bootstrap
              </a>. Icons from{" "}
              <a href="http://fontawesome.io/" rel="nofollow">
                Font Awesome
              </a>. Web fonts from{" "}
              <a href="https://fonts.google.com/" rel="nofollow">
                Google
              </a>.
            </p>
          </div>
          <div class="d-none d-md-block col-lg-4 col-md-4 col-sm-12 ">
            <ul class="list-unstyled">
              <li>
                <a
                  href="http://blog.bootswatch.com"
                  onclick="pageTracker._link(this.href); return false;"
                >
                  Blog
                </a>
              </li>
              <li>
                <a href="https://feeds.feedburner.com/bootswatch">RSS</a>
              </li>
              <li>
                <a href="https://twitter.com/bootswatch">Twitter</a>
              </li>
              <li>
                <a href="https://github.com/thomaspark/bootswatch/">GitHub</a>
              </li>
              <li>
                <a href="../help/#api">API</a>
              </li>
              <li>
                <a href="../help/#donate">Donate</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
