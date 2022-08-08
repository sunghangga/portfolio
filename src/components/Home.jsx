import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="osean_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(./assets/img/slider/profile.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Angga Pramana Putra</h3>
            <p className="job">
              Software Engineer based in Bali and happy to create solution to solve any problem.
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
