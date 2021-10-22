import locationIcon from "../../assets/icons/locationIcon.png";
import crossIcon from "../../assets/icons/crossIcon.png";
import exclamationMark from "../../assets/icons/exclamationMark.png";
import thumsUp from "../../assets/icons/thumsUp.png";
import group1 from "../../assets/group/group1.png";
import group2 from "../../assets/group/group2.png";
import group3 from "../../assets/group/group3.png";
import group4 from "../../assets/group/group4.png";
import styles from "./AsideContainer.module.css";

const AsideContainer = () => {
  const GROUPS = [
    {
      groupIcon: group1,
      groupName: "Leisure",
    },
    {
      groupIcon: group2,
      groupName: "Activism",
    },
    {
      groupIcon: group3,
      groupName: "MBA",
    },
    {
      groupIcon: group4,
      groupName: "Philosophy",
    },
  ];
  return (
    <aside>
      <div
        className={`sticky-top ${styles["aside"]}`}
        style={{ width: "auto", top: "2rem" }}
      >
        <div
          className={`d-flex align-items-center justify-content-between border-bottom mb-4`}
        >
          <div
            className={`d-flex align-items-center justify-content-center`}
            style={{ columnGap: "3px" }}
          >
            <img src={locationIcon} alt="" />
            <input
              type="text"
              placeholder="Enter your location"
              style={{ outline: "none", border: "none" }}
            />
          </div>
          <img src={crossIcon} alt="" />
        </div>

        <div
          className={`d-flex align-items-start mb-3`}
          style={{ columnGap: "6px" }}
        >
          <img src={exclamationMark} alt="" className={`pt-1`} />
          <small className={`text-secondary`}>
            Your location will help us serve better and extend a personalised
            experience.
          </small>
        </div>

        <div className={`d-flex flex-column align-items-between mb-3`}>
          <p
            style={{ columnGap: "6px" }}
            className={`d-flex align-items-center h6`}
          >
            <img src={thumsUp} alt="" />
            RECOMMENDED GROUPS
          </p>
          {GROUPS.map((group) => {
            return (
              <div
                className={`d-flex align-items-center justify-content-between mb-3`}
                key={group.groupName}
              >
                <div
                  className={`d-flex align-items-center`}
                  style={{ columnGap: "6px" }}
                >
                  <img src={group.groupIcon} alt="" />
                  <small>{group.groupName}</small>
                </div>
                <button className="btn btn-sm btn-light rounded-pill">
                  Follow
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default AsideContainer;
