import locationIcon from "/images/connect/location.svg";
import phoneIcon from "/images/connect/phone.svg";
import mailIcon from "/images/connect/mail.svg";

import image1 from "/images/cards/img1.png";
import image2 from "/images/cards/img2.png";
import image3 from "/images/cards/img3.png";
import image4 from "/images/cards/img4.png";

import tech1 from "/images/tech/tech1.png";
import tech2 from "/images/tech/tech2.png";
import tech3 from "/images/tech/tech3.png";
import tech4 from "/images/tech/tech4.png";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaYoutubeSquare,
  FaInstagramSquare,
  FaPinterestSquare,
} from "react-icons/fa";

const navItems = [
  {
    name: "ABOUT",
    href: "#about",
  },
  {
    name: "SERVICES",
    href: "#services",
  },
  {
    name: "TECHNOLOGIES",
    href: "#technologies",
  },
  {
    name: "HOW TO",
    href: "#howto",
  },
];
const connectItems = [
  {
    name: "Pay Us a Visit",
    description: "Union St, Seattle, WA 98101, United States",
    imgPath: locationIcon,
  },
  {
    name: "Give Us a Call",
    description: "(110) 1111-1010",
    imgPath: phoneIcon,
  },
  {
    name: "Send Us a Message",
    description: "Contact@HydraVTech.com",
    imgPath: mailIcon,
  },
];
const cardItems = [
  {
    title: "SIMULATION",
    description:
      "Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae",
    imgPath: image1,
  },
  {
    title: "EDUCATION",
    description:
      "Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae",
    imgPath: image2,
  },
  {
    title: "SELF-CARE",
    description:
      "Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae",
    imgPath: image3,
  },
  {
    title: "OUTDOOR",
    description:
      "Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae",
    imgPath: image4,
  },
];
const techItems = [
  {
    imgPath: tech1,
    title: "Unreal Engine",
  },
  {
    imgPath: tech2,
    title: "Unity",
  },
  {
    imgPath: tech3,
    title: "Oculus",
  },
  {
    imgPath: tech4,
    title: "Vive",
  },
];
const testingItems = [
  {
    num: "01",
    text: "3D Conception & Design",
  },
  {
    num: "02",
    text: "Interaction Design",
  },
  {
    num: "03",
    text: "VR World User Testing",
  },
  {
    num: "04",
    text: "Hydra VR Deploy",
  },
];
const footerItems = [
  {
    title: "ABOUT",
  },
  {
    title: "SERVICES",
  },
  {
    title: "TECHNOLOGIES",
  },
  {
    title: "HOW TO",
  },
  {
    title: "JOIN HYDRA",
  },
];
const footerConditions = [
  {
    title: "F.A.Q",
  },
  {
    title: "SITEMAP",
  },
  {
    title: "CONDITIONS",
  },
  {
    title: "LICENSES",
  },
];
const footerIcons = [
  {
    icon: FaFacebookSquare,
  },
  {
    icon: FaTwitterSquare,
  },
  {
    icon: FaLinkedin,
  },
  {
    icon: FaYoutubeSquare,
  },
  {
    icon: FaInstagramSquare,
  },
  {
    icon: FaPinterestSquare,
  },
];
export {
  navItems,
  connectItems,
  cardItems,
  techItems,
  testingItems,
  footerItems,
  footerConditions,
  footerIcons,
};
