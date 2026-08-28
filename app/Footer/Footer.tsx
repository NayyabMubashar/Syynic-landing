"use client"
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import {motion} from "motion/react";
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
    <footer className="bg-syynic-secondary  text-white px-8 md:px-16 pt-8 md:pt-16 pb-6">
      {/* Main Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src="/logo1.jpeg"
              alt="Synniq"
              className="w-9 h-9 rounded-lg md:w-12 md:h-12"
            />

            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl font-bold"
            >
              Synniq
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 text-sm md:text-lg mt-3 md:mt-6 max-w-md leading-7"
          >
            The all-in-one platform to help your team work smarter and achieve
            more.
          </motion.p>
        </div>

        {/* Links */}
        {footerLinks.map((section) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            key={section.title}
          >
            <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-5">
              {section.title}
            </h3>

            <div className="flex flex-col gap-2 md:gap-4">
              {section.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-synniq-primary transition"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        ))}

        <div>
          <motion.h3
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="text-sm md:text-lg font-semibold mb-5"
          >
            Stay Connected
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className="flex  flex-wrap gap-3"
          >
            {socialIcons.map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-synniq-primary transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-6 md:mt-12 pt-6 text-center">
        <p className="text-gray-500">© 2026 Synniq. All rights reserved.</p>
      </div>
    </footer>
  );
}
