import logo from "../assets/logo7.png"; {/*Logo of the portfolio holder*/}
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-centre">
        <img className="mx-2 w-20" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/tomarabhishek0201/"><FaLinkedin /></a>
        <a href="https://github.com/tomarabhishek1911"><FaGithub /></a>
        <a href="https://www.instagram.com/abhishek._singh._tomar?igsh=djNzZW1lenVkOWJp"><FaInstagram /></a>
        </div>
    </nav>
  );
};

export default Navbar