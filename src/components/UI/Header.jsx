import { useEffect, useState } from "react";
import mainBackground from "../../assets/mainBackground.png";
import mainBackgroundSmall from "../../assets/mainBackgroundSmall.png";
import backArrow from "../../assets/icons/backArrow.png";

const Header = () => {
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 576 ? mainBackground : mainBackgroundSmall;

  return (
    <>
      <header
        style={{
          backgroundImage: `url(${imageUrl})`,
          boxShadow: "inset 0 0 0 2000px rgba(0,0,0,0.6)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="px-5 pt-4 d-flex justify-content-between align-items-center d-md-none">
          <img src={backArrow} alt="" />
          <button className="btn btn-sm btn-outline-light">Join Group</button>
        </div>
        <div
          className={`px-2 mx-auto pb-5`}
          style={{ paddingTop: "200px", maxWidth: "1040px" }}
        >
          <h1 className={`text-white`}>Computer Engineering</h1>
          <p className={`text-white`}>142,765 Computer Engineers follow this</p>
        </div>
      </header>
    </>
  );
};

export default Header;
