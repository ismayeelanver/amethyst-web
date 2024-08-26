import { FaHome } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import icon from "../assets/icon.png";
export default function Header() {
  return (
    <>
      <img src={icon} alt="logo" className="logo" />
      <nav className="navbar">
        <div className="navdiv">
          <FaHome className="icon" />
          <a href="/home" className="item">
            Home
          </a>
          <FaGithub className="icon" />
          <a href="https://github.com/ismayeelanver/amethyst" className="item">
            Github
          </a>
          <FaInfo className="icon" />
          <a href="/about" className="item">
            About
          </a>
          <FaDiscord className="icon" />
          <a href="https://discord.gg/VnbruXre" className="item">
            Discord
          </a>
          <FaBook className="icon" />
          <a href="/docs" className="item">
            Docs
          </a>
        </div>
      </nav>
      <p className="tail">Happy hacking!</p>
    </>
  );
}
