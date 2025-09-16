import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router";

import { getUser } from "../../contexts/slice/getUser.slice";
import { selectSocialLinkAndCommonImage } from "../../contexts/slice/socialLinkAndCommonImage.slice";
import { ISocialLinkAndCommonImageApiResponse } from "../../types/api/api.type";
import { userRole } from "../../utils/constant";
import {
  CallIcon,
  FacebookIcon,
  Gmail,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
  YoutubeIcon,
} from "../Icons/Icon";

// eslint-disable-next-line @typescript-eslint/naming-convention
function Footer() {
  const location = useLocation();
  const data = useSelector(selectSocialLinkAndCommonImage);
  const user = useSelector(getUser);
  const [apiData, setApiData] =
    useState<ISocialLinkAndCommonImageApiResponse | null>(null);
  const [userDetails, setUserDetails] = useState<string>("user");

  useEffect(() => {
    const manageData = () => {
      if (data?.[0]) {
        setApiData(data?.[0]);
      }
      if (user?.role == userRole.admin) {
        setUserDetails(user.role);
      }
    };
    manageData();
  }, [data, user]);

  const shouldRenderFooter = !(
    userDetails === userRole.admin && location.pathname.startsWith("/admin")
  );

  return (
    <>
      {shouldRenderFooter ? (
        <footer className="w-full bg-custom_orange_1 text-white py-12 px-4 text-[15px] min-h-[465px]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>

              {/* Address */}
              <p className="text-white/90 md:text-lg text-sm">
                {apiData?.addressLine1 || "234 Change Maker St."}
              </p>
              {apiData?.addressLine2 && (
                <p className="text-white/90 md:text-lg text-sm">
                  {apiData.addressLine2}
                </p>
              )}
              <p className="text-white/90 md:text-lg text-sm">
                {apiData?.city || "City"}, {apiData?.state || "State"},{" "}
                {apiData?.postalCode || "ZIP"}
              </p>
              <p className="text-white/90 md:text-lg text-sm">
                {apiData?.country || "Country"}
              </p>

              {/* Phone Numbers */}
              <div className="text-white/90 md:text-lg text-sm mt-4 flex items-center gap-2">
                <CallIcon className="text-white/90 w-4 h-4 shrink-0" />
                <a
                  href={`tel:${apiData?.phoneNumber1 || "8144746685"}`}
                  className="hover:underline"
                >
                  (+91) {apiData?.phoneNumber1 || "8144746685"}
                </a>
              </div>
              <div className="text-white/90 md:text-lg text-sm mt-2 flex items-center gap-2">
                <CallIcon className="text-white/90 w-4 h-4 shrink-0" />
                <a
                  href={`tel:${apiData?.phoneNumber2 || "8144746685"}`}
                  className="hover:underline"
                >
                  (+91) {apiData?.phoneNumber2 || "8144746685"}
                </a>
              </div>

              {/* Email */}
              <div className="text-white/90 md:text-lg text-sm mt-2 flex items-baseline gap-2 break-all">
                <Gmail className="text-white/90 w-4 h-4 shrink-0" />
                <a
                  href={`mailto:${apiData?.email || "contact@example.com"}`}
                  className="hover:underline break-words"
                >
                  {apiData?.email || "contact@example.com"}
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">
                Quick Links
              </h2>
              <ul className="space-y-2 md:text-lg text-sm text-white/90">
                {[
                  { label: "Home", path: "/" },
                  { label: "About Us", path: "/about" },
                  { label: "Our Teams", path: "/our-team/view-all-teamMember" },
                  { label: "Donate", path: "/donate" },
                  { label: "Contact Us", path: "/add-contactUs" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="relative inline-block text-white/90 hover:text-white transition-colors duration-300
            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Follow Us</h2>
              <div className="flex flex-wrap gap-4 text-xl">
                {[
                  {
                    href: apiData?.youtubeUrl,
                    label: "YouTube",
                    Icon: YoutubeIcon,
                  },
                  {
                    href: apiData?.instagramUrl,
                    label: "Instagram",
                    Icon: InstagramIcon,
                  },
                  {
                    href: apiData?.linkedinUrl,
                    label: "LinkedIn",
                    Icon: LinkedinIcon,
                  },
                  {
                    href: apiData?.facebookUrl,
                    label: "Facebook",
                    Icon: FacebookIcon,
                  },
                  {
                    href: apiData?.twitterUrl,
                    label: "Twitter",
                    Icon: TwitterIcon,
                  },
                  {
                    href: apiData?.whatsappUrl,
                    label: "WhatsApp",
                    Icon: WhatsappIcon,
                  },
                  {
                    href: apiData?.telegramUrl,
                    label: "Telegram",
                    Icon: TelegramIcon,
                  },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group relative text-white/90 hover:text-white transition duration-300"
                  >
                    <Icon className="w-6 h-6 group-hover:scale-110 group-hover:text-white transition-transform duration-300" />
                    <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mission */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="md:text-lg text-sm text-white/90 leading-relaxed">
                We empower communities through education, health, and
                sustainable development. Join us in making a difference.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 border-t border-white/40 pt-4 text-center text-sm">
            <p>
              Copyright © 2025 All rights reserved by{" "}
              <span className="font-bold text-white">NIHIDA.</span>
            </p>
          </div>
        </footer>
      ) : (
        <div style={{ minHeight: "465px" ,display:'none'}} />
      )}
    </>
  );
}

export default Footer;
