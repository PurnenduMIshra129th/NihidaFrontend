import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { eventBus } from "../../contexts/context/eventBus";
import { userRole } from "../../utils/constant";
import {
  decodeToken,
  getStorageItem,
  removeStorageItem,
} from "../../utils/util";
import { HamburgerIcon } from "../Icons/Icon";
import Image from "../Image/Image";
import Typography from "../Text/Typography";

// eslint-disable-next-line @typescript-eslint/naming-convention
function Navbar() {
  const navigate = useNavigate();
  const token = getStorageItem("token");
  const decoded = decodeToken<{ exp: number; role: string }>(token || "");
  const role = getStorageItem("role");
  const [isOpen, setIsOpen] = useState(false);
  const logout = () => {
    removeStorageItem("token");
    removeStorageItem("role");
    eventBus.emit({
      type: "success",
      message: "You have been logged out successfully.",
    });
    navigate("/");
  };
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");

      // Delay scroll slightly until HomePage has loaded
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100); // You can tweak this for better UX
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 w-[97%]  z-50 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl px-6 py-4 sm:px-10 lg:px-16 h-20 flex`}
      >
        <div className="w-full flex flex-wrap items-center justify-between mx-auto ">
          <div className="flex flex-row flex-wrap justify-center items-center space-x-4">
            <Link
              to="/"
              title="Nihida Logo"
              className="flex items-center space-x-3 rtl:space-x-reverse outline-none "
            >
              <Image
                imagePath="/NIHIDA-LOGO.jpg"
                className="w-[3rem] h-[3rem] rounded-md "
              />
            </Link>
            <Typography
              text="NIHIDA"
              className="text-[30px] font-bold whitespace-nowrap text-black"
            />
          </div>
          <div
            className="items-center justify-end md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <button
              type="button"
              className="md:hidden inline-flex items-center p-2 text-sm rounded-lg focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              title="Hamburger"
            >
              <HamburgerIcon />
            </button>

            <ul
              className={`
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    fixed top-[-25px] left-0 w-3/4 h-screen md:z-20 z-[-1] flex flex-col
    px-6 pt-[22%] bg-white shadow-lg transition-transform duration-300 ease-in-out
    md:static md:flex-row md:translate-x-0 md:shadow-none md:bg-transparent md:h-auto md:w-auto md:p-0 md:space-x-4 text-[15px] font-bold
  `}
            >
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block py-2 px-3 rounded-sm md:p-0"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("focusActivity")}
                  className="block py-2 px-3 rounded-sm md:p-0"
                >
                  Focus Activity
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("upcomingEvents")}
                  className="block py-2 px-3 rounded-sm md:p-0"
                >
                  Upcoming Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("documents")}
                  className="block py-2 px-3 rounded-sm md:p-0"
                >
                  Documents
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="block py-2 px-3 rounded-sm md:p-0"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("video")}
                  className="block py-2 px-3 rounded-sm md:p-0"
                >
                  Video
                </button>
              </li>
              {/* <li>
                <button
                  onClick={() => scrollToSection("news")}
                  className="block py-2 px-3 rounded-sm md:p-0"
                >
                  News
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("videos")}
                  className="block py-2 px-3 rounded-sm md:p-0"
                >
                  Videos
                </button>
              </li> */}
              {token &&
                decoded?.role == userRole.admin &&
                role == userRole.admin && (
                  <li>
                    <Link
                      to="/manage"
                      className="block py-2 px-3 rounded-sm md:p-0"
                    >
                      Admin
                    </Link>
                  </li>
                )}

              {token ? (
                <li>
                  <button
                    onClick={() => logout()}
                    className="block py-2 px-3 rounded-sm md:p-0"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link
                    to="/login"
                    className="block py-2 px-3 rounded-sm md:p-0"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
