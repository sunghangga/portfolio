import React, { useState } from "react";
import { Link } from "react-router-dom";
import Theme from "../components/Theme";

const NotFound = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className="not-found-wrapper">
      <div className="leftpart">
        <div className="leftpart_inner">
          <div className="logo">
            <Theme theme={theme} setTheme={setTheme} />
          </div>
          {/* END LOGO */}
          <div className="copyright">
            <p>
              &copy; {new Date().getFullYear()} Portfolio <br /> Created with Love
            </p>
          </div>
          {/* END COPYRIGHT */}
        </div>
      </div>
      {/* END LEFT PART */}

      <div className="rightpart">
        <div className="rightpart_in">
          <div className="osean_tm_section">
            <div className="container">
              <div className="osean_tm_error">
                <div className="osean_tm_error_inner">
                  <h1>404!</h1>
                  <h3>Page not found</h3>
                  <p>The page you were looking for could not be found.</p>
                  <Link to="/" className="ib-button">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END RIGHT PART */}

      <footer className="footer-wrapper">
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} Portfolio <br /> Created with Love
          </p>
        </div>
        {/* END COPYRIGHT */}
      </footer>
    </div>
  );
};

export default NotFound;
