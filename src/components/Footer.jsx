import { ArrowRight } from "lucide-react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0057B8] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        
        <div className="grid md:grid-cols-4 gap-12">

          <div>
            <h3 className="uppercase text-sm font-bold tracking-wider mb-8">
              Contact & About
            </h3>

            <ul className="space-y-6">
              <li>
                <a
                  href="#"
                  className="text-1xl hover:underline transition"
                >
                  Order Support
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-1xl hover:underline transition"
                >
                  Currency & Shipping & Handling Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-1xl hover:underline transition"
                >
                  Privacy Policy/GDPR Compliance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-2xl font-medium mb-8">
              ABN: 58 646 787 500
            </p>

            <p className="text-1xl leading-relaxed">
              Shipping from
              <br />
              Prestons, NSW
            </p>
          </div>

          <div className="flex items-center gap-6">

            <img
              src="https://dailyclack.com/cdn/shop/files/Asset_57_256aad12-8b6d-41ac-bd73-9305b4f6efeb_200x.png?v=1699487542"
              alt="AAA Badge"
              className="w-28 h-28 object-contain"
            />

            <img
              src="https://dailyclack.com/cdn/shop/files/GMK_Badges_Authorized_Vendor_white_200x.png?v=1739760471"
              alt="GMK Authorized Vendor"
              className="w-28 h-28 object-contain"
            />

          </div>

          <div>
            <h3 className="uppercase text-sm font-bold tracking-wider mb-8">
              Daily Clack Newsletter
            </h3>

            <p className="text-1xl mb-6">
              Subscribe for news and discounts
            </p>

            <div className="border border-white/30 flex items-center justify-between px-5 py-4 rounded">
              <input
                type="email"
                placeholder="Your e-mail"
                className="bg-transparent outline-none w-full placeholder:text-white/70"
              />

              <ArrowRight size={22} />
            </div>
          </div>

        </div>

        <div className="border-t border-white/20 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-xl font-medium">
            Daily Clack
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-lg">We accept</span>

            <FaCcAmex size={36} />
            <FaCcVisa size={36} />
            <FaCcMastercard size={36} />
            <FaCcPaypal size={36} />
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;