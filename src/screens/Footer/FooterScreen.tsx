import { Link } from "react-router";

// eslint-disable-next-line @typescript-eslint/naming-convention
function FooterScreen() {
  return (
    <>
      <footer className="w-full bg-custom_orange_1 text-white py-12 px-4 text-[15px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-white/90 text-sm">234 Change Maker St.</p>
            <p className="text-white/90 text-sm">City, State, ZIP</p>
            <p className="text-white/90 text-sm mt-2">📞 (123) 456-7890</p>
            <p className="text-white/90 text-sm">✉️ info@inspireaction.org</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-white">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="hover:text-white">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-white">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-xl">
              <a href="#" aria-label="YouTube" className="hover:text-white">
                📺
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                📸
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                💼
              </a>
            </div>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Mission</h3>
            <p className="text-sm text-white/90 leading-relaxed">
              We empower communities through education, health, and sustainable
              development. Join us in making a difference.
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
    </>
  );
}

export default FooterScreen;
