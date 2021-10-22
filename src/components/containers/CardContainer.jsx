import PostCard from "../UI/PostCard";
import cardImg1 from "../../assets/card-images/cardImg1.jpeg";
import cardImg2 from "../../assets/card-images/cardImg2.jpeg";
import cardImg3 from "../../assets/card-images/cardImg3.jpeg";
import avatar1 from "../../assets/avatar/avatar1.png";
import avatar2 from "../../assets/avatar/avatar2.png";
import avatar3 from "../../assets/avatar/avatar3.png";
import avatar4 from "../../assets/avatar/avatar4.png";
import calanderIcon from "../../assets/icons/calanderIcon.png";
import componeyIcon from "../../assets/icons/componeyIcon.png";
import locationIcon from "../../assets/icons/locationIcon.png";

const CardContainer = () => {
  const POSTCARDDATA = [
    {
      type: "article",
      tag: "✍️ Article",
      img: cardImg1,
      heading: "What if famous brands had regular fonts? Meet RegulaBrands!",
      text: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      avatar: avatar1,
      authorName: "Sarthak Kamra",
    },

    {
      type: "education",
      tag: "🔬️ Education",
      img: cardImg2,
      heading:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      text: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      avatar: avatar2,
      authorName: "Sarah West",
    },

    {
      type: "meetup",
      tag: "🗓️ Meetup",
      img: cardImg3,
      heading: "Finance & Investment Elite Social Mixer @Lujiazui",
      avatar: avatar3,
      authorName: "Ronal Jones",
      meetUp: "Fri, 12 Oct, 2018",
      meetUpIcon: calanderIcon,
      meetUpLocation: "Ahmedabad, India",
      locationIcon: locationIcon,
      buttonText: "Visit Website",
    },

    {
      type: "job",
      tag: "💼️ Job",
      heading: "Software Developer",
      avatar: avatar4,
      authorName: "Ronal Jones",
      meetUp: "Innovaccer Analytics Private Ltd.",
      meetUpIcon: componeyIcon,
      meetUpLocation: "Noida, India",
      locationIcon: locationIcon,
      buttonText: "Apply on Timesjobs",
    },
  ];
  return (
    <div>
      <PostCard info={POSTCARDDATA[0]} />
      <PostCard info={POSTCARDDATA[1]} />
      <PostCard info={POSTCARDDATA[2]} />
      <PostCard info={POSTCARDDATA[3]} />
    </div>
  );
};

export default CardContainer;
