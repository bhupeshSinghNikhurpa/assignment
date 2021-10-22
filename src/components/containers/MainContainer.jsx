import React from "react";
import AsideContainer from "./AsideContainer";
import CardContainer from "./CardContainer";

const MainContainer = () => {
  return (
    <div>
      <div
        className={`d-flex align-items-center justify-content-between border-bottom px-2 pb-2 mb-4`}
      >
        <strong className={`d-block d-md-none`}>Posts(368)</strong>
        <div
          className={`d-none justify-content-between me-auto d-md-flex`}
          style={{ columnGap: "2rem" }}
        >
          <small>All Posts(32)</small>
          <small>Article</small>
          <small>Event</small>
          <small>Education</small>
          <small>Job</small>
        </div>

        <small>
          <button
            className="btn btn-light btn-sm dropdown-toggle d-block d-md-none"
            data-bs-toggle="dropdown"
          >
            Filter: All
          </button>
          <ul
            className="dropdown-menu"
            aria-labelledby="navbarScrollingDropdown"
          >
            <li>
              <a className="dropdown-item" href="javascrpit:void(0)">
                Article
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="javascrpit:void(0)">
                Event
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="javascrpit:void(0)">
                Education
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="javascrpit:void(0)">
                Job
              </a>
            </li>
          </ul>
        </small>
        <div className={`d-flex justify-content-between d-none d-md-block`}>
          <button
            type="button"
            className="btn btn-light btn-sm dropdown-toggle me-3"
          >
            Write a Post
          </button>
          <button type="button" className="btn btn-primary btn-sm">
            Leave Group
          </button>
        </div>
      </div>
      <div
        className={`d-flex flex-column flex-sm-row justify-content-between p-2`}
        style={{ columnGap: "1rem", rowGap: "2rem" }}
      >
        <CardContainer />
        <AsideContainer />
      </div>
    </div>
  );
};

export default MainContainer;
