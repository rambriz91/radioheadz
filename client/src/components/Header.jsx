import Logo from "../assets/images/radioheadz-high-resolution-logo-transparent.png";
import DonateImage from "../assets/images/donate_now-removebg.png";
import AuthService from "../utils/auth";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const toLoginPage = () => {
  window.location.href = "/login";
};

const toSignupPage = () => {
  window.location.href = "/signup";
};

const toLogOutPage = () => {
  AuthService.logout();
  window.location.href = "/login";
};

const toProfilePage = () => {
  window.location.href = "/profile";
};

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <header className="flex justify-between px-4 bg-[#2d3033] text-[#ffa62e]">
      <div className="mt-2">
        <a href="/">
          <img src={Logo} alt="Logo" style={{ width: "200px" }} />
        </a>
      </div>

      <h1 className="text-7xl  font-oleo-script flex items-center text-[#ffa62e]">
        Radioheadz
      </h1>

      <div className=" flex justify-between list-none items-center">
        <ul className="list-none max-md:hidden">
          {!AuthService.loggedIn() ? (
            <>
              <li>
                <Link
                  className="text-[#ffa62e] hover:text-[#CA3433] no-underline mr-4"
                  style={{ textDecoration: "none" }}
                  onClick={toLoginPage}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#ffa62e] hover:text-[#CA3433] no-underline mr-4"
                  style={{ textDecoration: "none" }}
                  onClick={toSignupPage}
                >
                  Signup
                </Link>
              </li>
            </>) : (
            <>
              <li className="mt-4">
                <Link
                  className="text-[#ffa62e] hover:text-[#CA3433] no-underline "
                  style={{ textDecoration: "none" }}
                  onClick={toLogOutPage}
                >
                  Logout
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#ffa62e] hover:text-[#CA3433] no-underline"
                  style={{ textDecoration: "none" }}
                  onClick={toProfilePage}
                >
                  Profile
                </Link>
              </li>
            </>)}
          <li>
            <a
              className="text-[#2eff3f] hover:text-[#CA3433] no-underline mr-4"
              href="https://buy.stripe.com/test_14kaHGdcg0uK93y144"
              target="_blank"
            >
              $ Donate Now $
            </a>
            {/* <div className="mb-4">
                <a
                  href="https://buy.stripe.com/test_14kaHGdcg0uK93y144"
                  target="_blank"
                >
                  <img
                    src={DonateImage}
                    alt="Donate"
                    style={{ width: "100px" }}
                  />
                </a>
              </div> */}
          </li>
        </ul>
        <div onClick={handleClick} className="md:hidden z-20">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen flex flex-col list-none bg-[#2d3033] justify justify-center items-center z-10"
          }
        >
          {!AuthService.loggedIn() ? (
            <>
              <li className="py-6 text-4xl">
                <Link
                  className="no-underline text-[#ffa62e] hover:text-[#CA3433]"
                  style={{ textDecoration: "none" }}
                  onClick={toSignupPage}
                >
                  Signup
                </Link>
              </li>
              <li className="py-6 text-4xl">
                <Link
                  className="no-underline text-[#ffa62e] hover:text-[#CA3433]"
                  style={{ textDecoration: "none" }}
                  onClick={toSignupPage}
                >
                  Login
                </Link>
              </li>
              <li> <a
                className="text-[#2eff3f] hover:text-[#CA3433] no-underline py-6 text-4xl"
                href="https://buy.stripe.com/test_14kaHGdcg0uK93y144"
                target="_blank"
              >
                $ Donate Now $
              </a></li>
            </>) : (
            <>
              <li className="py-6 text-4xl">
                <Link
                  className="text-[#ffa62e] hover:text-[#CA3433] no-underline "
                  style={{ textDecoration: "none" }}
                  onClick={toLogOutPage}
                >
                  Logout
                </Link>
              </li>
              <li className="py-6 text-4xl">
                <Link
                  className="text-[#ffa62e] hover:text-[#CA3433] no-underline"
                  style={{ textDecoration: "none" }}
                  onClick={toProfilePage}
                >
                  Profile
                </Link>
              </li>
              <li>
                <a
                  className="text-[#2eff3f] hover:text-[#CA3433] no-underline py-6 text-4xl"
                  href="https://buy.stripe.com/test_14kaHGdcg0uK93y144"
                  target="_blank"
                >
                  $ Donate Now $
                </a>
              </li>
            </>)}
        </ul>
        <div>
          <ul></ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
