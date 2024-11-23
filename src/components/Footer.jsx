
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-gray-400">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-red-500" />
              <span className="text-2xl font-bold text-white">KIMOX</span>
            </div>
            <p className="text-sm">
              There are many variations of available, but the majority have suffered alteration in some form,
              by injected humour of kimox theme
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white" aria-label="Facebook">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white" aria-label="Twitter">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white" aria-label="Instagram">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Important Links</h3>
            <ul className="space-y-3">
              {['About Company', 'Contact Us', 'Privacy Policy', 'Terms & Conditions', 'Mission & Vision'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Newsletter</h3>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-gray-700 text-white placeholder:text-gray-400"
              />
              <button className="w-full bg-red-500 hover:bg-red-600 text-white">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-6xl px-4 py-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm">© Copyrights 2023 BDevs</p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm hover:text-white">
                Join Our Team
              </a>
              <a href="#" className="text-sm hover:text-white">
                Terms & Condition
              </a>
              <a href="#" className="text-sm hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}