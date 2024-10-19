import logoReact from "../assets/react-logo-programming.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10 " src={logoReact} alt="logo" />
        {/* <TbBrandReact className="w-full" /> */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a className="hover:text-indigo-400" href="#"><FaLinkedin /></a>
          <a className="hover:text-indigo-400" href="#"><FaGithub/></a>
          <a className="hover:text-indigo-400" href="#"><FaFacebookSquare/></a>
          <a className="hover:text-indigo-400" href="#"><FaInstagram/></a>
        </div>
    </nav>
  );
};

export default Navbar;
