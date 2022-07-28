import React, { useState } from "react";
import Modal from "react-modal";
import * as portfolioData from "../data/portfolio.json";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

Modal.setAppElement("#root");

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="tokyo_tm_news">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Portfolio</span>
              <h3>Creative Portfolio</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <ul>
          {portfolioData.data.map((item, i) => {
            return (
              <li key={i}>
                <div className="list_inner">
                  <div className="image" onClick={toggleModal}>
                    <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: "url(assets/img/news/1.jpg)",
                      }}
                    ></div>
                  </div>
                  {/* END IMAGE */}
                  <div className="details">
                    <div className="extra">
                      <p className="date">
                        <span>{item.year}</span>
                      </p>
                    </div>
                    {/* END EXTRA */}

                    <h3 className="title" onClick={toggleModal}>
                      {item.title}
                    </h3>
                    <div className="tokyo_tm_read_more">
                      <a onClick={toggleModal}>
                        <span>Read More</span>
                      </a>
                    </div>
                    {/* END READ MORE BUTTON */}
                  </div>
                  {/* END DETAILS */}

                  {/* START MODAL */}
                  <Modal
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    contentLabel="My dialog"
                    className="mymodal"
                    overlayClassName="myoverlay"
                    closeTimeoutMS={500}
                  >
                    <div className="tokyo_tm_modalbox_news">
                      <button className="close-modal" onClick={toggleModal}>
                        <img src="assets/img/svg/cancel.svg" alt="close icon" />
                      </button>
                      {/* END CLOSE ICON */}
                      <div className="box_inner">
                        <div className="description_wrap scrollable">
                          <div className="image">
                            <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(assets/img/news/1.jpg)",
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <div className="extra">
                              <p className="date">
                                <span>{item.year}</span>
                              </p>
                            </div>
                            <h3 className="title">
                              {item.title}
                            </h3>
                          </div>
                          {/* END DETAILS */}
                          <div className="main_content ">
                            <div className="descriptions">
                              <p className="bigger">
                                {item.description}
                              </p>
                            </div>
                            {/* END DESCRIPTION */}
                            <SimpleReactLightbox>
                              <div className="tokyo_tm_portfolio pt-0">
                                <div className="list_wrapper">
                                  <SRLWrapper>
                                    <ul className="portfolio_list">
                                      {item.gallery.map((detail, j) => {
                                        return (
                                          <li key={j}>
                                            <div className="inner">
                                              <div className="entry tokyo_tm_portfolio_animation_wrap">
                                                <a href={detail}>
                                                  <img
                                                    src={detail}
                                                    alt="Portfolio"
                                                  />
                                                </a>
                                              </div>
                                            </div>
                                          </li>
                                        )
                                      })}
                                    </ul>
                                    {/* END ALL PORTFOLIO GALLERY */}
                                  </SRLWrapper>
                                  {/* END TABPANEL */}
                                </div>
                              </div>
                            </SimpleReactLightbox>
                            {/* END GALLERY */}
                          </div>
                        </div>
                      </div>
                      {/* END BOX INNER */}
                    </div>
                    {/* END MODALBOX PORTFOLIO */}
                  </Modal>
                  {/* END MODAL */}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
};

export default Portfolio;
