import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#172337] text-gray-300 pt-10 pb-4 text-sm">
      {/* Top Section */}
      <div className="max-w-[1300px] mx-auto px-4 grid grid-cols-2 md:grid-cols-6 gap-6 border-b border-gray-600 pb-8">
        {/* About */}
        <div>
          <h4 className="text-gray-400 font-semibold mb-3">ABOUT</h4>
          <ul className="space-y-2">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Stories</li>
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
        </div>

        {/* Group Companies */}
        <div>
          <h4 className="text-gray-400 font-semibold mb-3">GROUP COMPANIES</h4>
          <ul className="space-y-2">
            <li>Myntra</li>
            <li>Cleartrip</li>
            <li>Shopsy</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-gray-400 font-semibold mb-3">HELP</h4>
          <ul className="space-y-2">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Consumer Policy */}
        <div>
          <h4 className="text-gray-400 font-semibold mb-3">CONSUMER POLICY</h4>
          <ul className="space-y-2">
            <li>Cancellation & Returns</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
            <li>EPR Compliance</li>
          </ul>
        </div>

        {/* Mail Us */}
        <div>
          <h4 className="text-gray-400 font-semibold mb-3">Mail Us:</h4>
          <p>
            Auron Internet Private Limited,<br />
            Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
            Outer Ring Road, Devarabeesanahalli Village,<br />
            Bengaluru, 560103, Karnataka, India
          </p>

          <div className="flex gap-4 mt-4 text-xl text-gray-400">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Registered Office */}
        <div>
          <h4 className="text-gray-400 font-semibold mb-3">Registered Office Address:</h4>
          <p>
            Auron Internet Private Limited,<br />
            Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
            Outer Ring Road, Devarabeesanahalli Village,<br />
            Bengaluru, 560103, Karnataka, India
          </p>
          <p className="mt-3">
            CIN: <span className="text-white">U51109KA2012PTC066107</span><br />
            Telephone: <span className="text-blue-400">044-45614700 / 044-67415800</span>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-[1300px] mx-auto px-4 mt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
        <div className="flex flex-wrap justify-center gap-6">
          <p>Become a Seller</p>
          <p>Advertise</p>
          <p>Gift Cards</p>
          <p>Help Center</p>
        </div>
        <p>© 2025 Auron.com</p>
        <div className="flex gap-3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="Mastercard" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Rupay-Logo.png" alt="Rupay" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/UPI-Logo-vector.svg" alt="UPI" className="h-5" />
        </div>
      </div>
    </footer>
  );
}
