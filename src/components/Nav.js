import React from "react";
// icons
import { BiUser, BiHome } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
// React-scroll
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className=" fixed bottom-2 z-50 w-full overflow-hidden lg:bottom-8">
      <div className="container mx-auto">
        <div className="mx-auto flex h-[80px] w-full max-w-[460px] items-center justify-between rounded-full bg-black/20 px-5 backdrop-blur-2xl">
          <Link
            className=" flex h-[40px] w-[40px] cursor-pointer items-center justify-center"
            to="home"
            offset={-200}
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BiHome />
          </Link>
          <Link
            className=" flex h-[40px] w-[40px] cursor-pointer items-center justify-center"
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BiUser />
          </Link>
          <Link
            className=" flex h-[40px] w-[40px] cursor-pointer items-center justify-center"
            to="services"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsClipboardData />
          </Link>
          <Link
            className=" flex h-[40px] w-[40px] cursor-pointer items-center justify-center"
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsBriefcase />
          </Link>
          <Link
            className=" flex h-[40px] w-[40px] cursor-pointer items-center justify-center"
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
