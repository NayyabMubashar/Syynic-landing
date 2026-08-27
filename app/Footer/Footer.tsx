import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Blog", "Guides", "Templates", "Help Center"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Contact", "Privacy Policy"],
  },
];

const socialIcons = [FaLinkedinIn, FaTwitter, FaFacebookF, FaYoutube];

export default function Footer() {
  return (
    <footer className="bg-syynic-navy  text-white px-8 md:px-16 pt-8 md:pt-16 pb-6">
      {/* Main Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
    
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img src="/logo1.jpeg" alt="Synniq" className="w-9 h-9 md:w-12 md:h-12" />

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Synniq</h2>
          </div>

          <p className="text-gray-400 text-sm md:text-lg mt-3 md:mt-6 max-w-md leading-7">
            The all-in-one platform to help your team work smarter and achieve
            more.
          </p>
        </div>

        {/* Links */}
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-5">{section.title}</h3>

            <div className="flex flex-col gap-2 md:gap-4">
              {section.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-synniq-blue transition"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}

     
        <div>
          <h3 className="text-sm md:text-lg font-semibold mb-5">Stay Connected</h3>

          <div className="flex  flex-wrap gap-3">
            {socialIcons.map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-synniq-blue transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-6 md:mt-12 pt-6 text-center">
        <p className="text-gray-500">© 2026 Synniq. All rights reserved.</p>
      </div>
    </footer>
  );
}
