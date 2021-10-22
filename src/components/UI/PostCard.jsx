import React from "react";
import shareIcon from "../../assets/icons/shareIcon.png";
import viewsIcon from "../../assets/icons/viewsIcon.png";
import moreOptions from "../../assets/icons/moreOptions.png";

function PostCard(props) {
  const {
    tag,
    img,
    heading,
    text,
    avatar,
    authorName,
    buttonText,
    meetUp,
    meetUpLocation,
    meetUpIcon,
    locationIcon,
  } = props.info;
  return (
    <div
      className={`p-0 border rounded overflow-hidden mb-2`}
      style={{ maxWidth: "692px" }}
    >
      {img && <img className={`img-fluid`} src={img} alt="" />}

      {/* body */}
      <div className={`p-3`}>
        <h6 className="text-start"> {tag}</h6>
        <div
          className={`d-flex justify-content-between align-items-start gap-3`}
        >
          <h4>{heading}</h4>
          <div className={`dropdown`}>
            <div
              className={`d-flex justify-content-center align-items-center`}
              data-bs-toggle="dropdown"
              style={{ height: "40px", width: "40px" }}
            >
              <img
                src={moreOptions}
                alt="more-options"
                style={{ cursor: "pointer" }}
              />
            </div>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="javascrpit:void(0)">
                  Edit
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="javascrpit:void(0)">
                  Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="javascrpit:void(0)">
                  Option 3
                </a>
              </li>
            </ul>
          </div>
        </div>
        {text && <p className={`fw-light text-secondary`}>{text}</p>}
        {meetUp && (
          <div className={`d-flex gap-3 mb-3`}>
            <div
              className={`d-flex justify-content-center align-items-center gap-2`}
            >
              <img src={meetUpIcon} alt="" />
              <small>{meetUp}</small>
            </div>
            <div
              className={`d-flex justify-content-center align-items-center gap-2`}
            >
              <img src={locationIcon} alt="" />
              <small>{meetUpLocation}</small>
            </div>
          </div>
        )}
        {buttonText && (
          <div className="d-grid">
            <button className="btn btn-outline-secondary" type="button">
              {buttonText}
            </button>
          </div>
        )}
      </div>

      {/* footer */}
      <div
        className={`d-flex gap-2 justify-content-between align-items-center p-3 pt-1`}
        style={{ cursor: "pointer" }}
      >
        <img src={avatar} alt="avatar" />
        <div
          className={`d-flex justify-content-between flex-column flex-sm-row justify-sm-content-between  flex-grow-1 me-4`}
        >
          <h6 className={`mb-0`}>{authorName}</h6>
          <small className={`d-flex align-items-center`}>
            <img src={viewsIcon} className={`me-2 d-none d-sm-block`} alt="" />
            1.4k views
          </small>
        </div>
        <div
          className={`d-flex justify-content-center align-items-center rounded px-3 gap-2 bg-light align-self-stretch`}
          style={{ cursor: "pointer" }}
        >
          <img src={shareIcon} alt="share" />
          <small className={`d-block d-sm-none`}>Share</small>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
