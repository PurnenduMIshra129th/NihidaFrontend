import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

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
  const location = useLocation();
  const navigate = useNavigate();
  const token = getStorageItem("token");
  const decoded = decodeToken<{ exp: number; role: string }>(token || "");
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const role = getStorageItem("role");
  const [isOpen, setIsOpen] = useState(false);
  const disableScrollHighlightRoutes = [
    "/admin",
    "/login",
    "/blog",
    "/donate",
    "/contact",
  ];

  const isScrollHighlightDisabled = disableScrollHighlightRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

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
  useEffect(() => {
    const sectionIds = [
      "about",
      "focusActivity",
      "upcomingEvents",
      "documents",
      "gallery",
      "video",
    ];
    const handleScroll = () => {
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[97%] z-50 rounded-2xl bg-white/30 backdrop-blur-md border border-white/30 shadow-2xl px-6 py-4 sm:px-10 lg:px-16 h-20 flex">
        <div className="w-full flex flex-wrap items-center justify-between mx-auto">
          {/* Logo */}
          <div className="flex flex-row flex-wrap justify-center items-center space-x-4">
            <Link
              to="/"
              title="Nihida Logo"
              className="flex items-center space-x-3 rtl:space-x-reverse outline-none"
            >
              <Image
                imagePath="/NIHIDA-LOGO.webp"
                className="w-[3rem] h-[3rem] rounded-md"
              />
            </Link>
            <Typography
              text="NIHIDA"
              className="text-[30px] font-bold font-mono whitespace-nowrap"
            />
          </div>

          {/* Hamburger + Menu */}
          <div
            className="items-center justify-end lg:flex lg:w-auto lg:order-1"
            id="navbar-sticky"
          >
            {/* Hamburger Button */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center p-2 rounded-lg focus:outline-none text-black"
              onClick={() => setIsOpen(true)}
              title="Hamburger"
            >
              <HamburgerIcon color="black" />
            </button>

            {/* Navigation Links */}
            <ul
              className={`
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          fixed top-[-2rem] left-[-2%] w-3/4 h-screen z-40 flex flex-col
          px-6 pt-[22%] shadow-lg transition-transform duration-300 ease-in-out bg-custom_white_1
          lg:static lg:flex-row lg:translate-x-0 lg:shadow-none lg:bg-transparent lg:h-auto lg:w-auto lg:p-0 lg:space-x-6 text-[15px] font-semibold
        `}
            >
              {/* Close Button (Mobile Only) */}
              <li>
                <button
                  className="absolute top-4 right-4 text-xl lg:hidden"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Menu"
                >
                  ❌
                </button>
              </li>
              {[
                { label: "About", id: "about" },
                { label: "Focus Activity", id: "focusActivity" },
                { label: "Upcoming Events", id: "upcomingEvents" },
                { label: "Documents", id: "documents" },
                { label: "Gallery", id: "gallery" },
                { label: "Video", id: "video" },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => {
                      scrollToSection(id);
                      setIsOpen(false);
                    }}
                    className={`relative block py-2 px-3 rounded-sm lg:p-0 transition-all duration-300
        ${
          activeSection === id && !isScrollHighlightDisabled
            ? "text-custom_orange_1 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-custom_orange_1 after:transition-all"
            : "text-black hover:text-custom_orange_1"
        }`}
                  >
                    {label}
                  </button>
                </li>
              ))}

              {token &&
                decoded?.role === userRole.admin &&
                role === userRole.admin && (
                  <li>
                    <Link
                      to="/admin"
                      onClick={() => setIsOpen(false)}
                      className={`relative block py-2 px-3 rounded-sm lg:p-0 transition-all duration-300
          ${
            location.pathname.startsWith("/admin")
              ? "text-custom_orange_1 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-custom_orange_1"
              : "text-black hover:text-custom_orange_1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-custom_orange_1 hover:after:w-full"
          }
        `}
                    >
                      Admin
                    </Link>
                  </li>
                )}

              {token ? (
                <li
                  className="relative block py-2 px-3 rounded-sm lg:p-0 text-black hover:text-custom_orange_1 transition-all duration-300
        after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-custom_orange_1 hover:after:w-full cursor-pointer"
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                >
                  Logout
                </li>
              ) : (
                <li>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className={`relative block py-2 px-3 rounded-sm lg:p-0 transition-all duration-300
        ${
          location.pathname === "/login"
            ? "text-custom_orange_1 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-custom_orange_1"
            : "text-black hover:text-custom_orange_1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-custom_orange_1 hover:after:w-full"
        }
      `}
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
