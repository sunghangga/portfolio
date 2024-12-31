import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="osean_tm_about">
        <div className="about_image">
          <img src="./assets/img/slider/view.jpg" alt="about" />
        </div>
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">Angga Pramana Putra</h3>
          <div className="description_inner">
            <div className="left">
              <p>
                Hello, I'm a Software Engineer from Indonesia currently based in Bali. 
                I specializing in building (and occasionally designing) 
                exceptional digital experiences and focused on building innovation that 
                can unlock the revenue potential of your ideas.
                I love everything that has to do with programming, web design, 
                cryptography and I feel a true devotion for programming. 
                I work closely with other colleagues involved in projects, 
                such as software engineer, and devops staff. 
                I also work directly with clients.
              </p>
              <div className="osean_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Read More
                </button>
              </div>
              {/* END OSEAN BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Address:</span>Bali, Indonesia
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:oseanapp@gmail.com">oseanapp@gmail.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone:</span>
                    <a href="tel:+6285205142721">+62 852 0514 2721</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Study:</span>Udayana Univercity
                  </p>
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="osean_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="./assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div className="description_wrap scrollable">
              <div className="counter">
                <div className="about_title">
                  <h3>Skills</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3><img src="./assets/img/svg/portfolio/java.svg" className="svg" alt="java" /></h3>
                      <span>Java</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3><img src="./assets/img/svg/portfolio/spring.svg" className="svg" alt="spring" /></h3>
                      <span>Spring</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3><img src="./assets/img/svg/portfolio/jenkins.svg" className="svg" alt="jenkins" /></h3>
                      <span>Jenkins</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3><img src="./assets/img/svg/portfolio/python.svg" className="svg" alt="python" /></h3>
                      <span>Python</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3><img src="./assets/img/svg/portfolio/flask.svg" className="svg" alt="flask" /></h3>
                      <span>Flask</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3><img src="./assets/img/svg/portfolio/javascript.svg" className="svg" alt="javascript" /></h3>
                      <span>Javascript</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3><img src="./assets/img/svg/portfolio/reactjs.svg" className="svg" alt="reactjs" /></h3>
                      <span>React JS</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3><img src="./assets/img/svg/portfolio/vuejs.svg" className="svg" alt="vuejs" /></h3>
                      <span>Vue JS</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3><img src="./assets/img/svg/portfolio/extjs.svg" className="svg" alt="extjs" /></h3>
                      <span>EXT JS</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3><img src="./assets/img/svg/portfolio/docker.svg" className="svg" alt="docker" /></h3>
                      <span>Docker</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3><img src="./assets/img/svg/portfolio/redis.svg" className="svg" alt="redis" /></h3>
                      <span>Redis</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3><img src="./assets/img/svg/portfolio/mosquitto.svg" className="svg" alt="mosquitto" /></h3>
                      <span>Mosquitto MQTT</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3><img src="./assets/img/svg/portfolio/php.svg" className="svg" alt="php" /></h3>
                      <span>PHP</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3><img src="./assets/img/svg/portfolio/laravel.svg" className="svg" alt="laravel" /></h3>
                      <span>Laravel</span>
                    </div>
                  </li>
                </ul>
                {/* END COUNTER CONTENT */}
              </div>
              {/* END COUNTER */}

              <div className="counter">
                <div className="about_title">
                  <h3>Languages</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3><img src="./assets/img/svg/flag_english.svg" className="svg" alt="english_flag" /></h3>
                      <span>English</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3><img src="./assets/img/svg/flag_indonesia.svg" className="svg" alt="indonesia_flag" /></h3>
                      <span>Indonesia</span>
                    </div>
                  </li>
                </ul>
                {/* END COUNTER CONTENT */}
              </div>
              {/* END COUNTER */}

              <div className="partners">
                <div className="about_title">
                  <h3>Our Partners</h3>
                </div>
                <Brand />
              </div>
              {/* END PARTNER SLIDER */}
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
