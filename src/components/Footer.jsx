import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const footerData = [
  {
    title: "SELL A HOME",
    links: [
      { name: "Request an offer", href: "/request-an-offer" },
      { name: "Pricing", href: "/pricing" },
      { name: "Reviews", href: "/reviews" },
      { name: "Stories", href: "/stories" },
    ],
  },
  {
    title: "BUY A HOME",
    links: [
      { name: "Buy", href: "/buy" },
      { name: "Finance", href: "/finance" },
    ],
  },
  {
    title: "BUY, RENT AND SELL",
    links: [
      { name: "Buy and sell properties", href: "/buy-and-sell-properties" },
      { name: "Rent home", href: "/rent-home" },
      { name: "Builder trade-up", href: "/builder-trade-up" },
    ],
  },
  {
    title: "TERMS & PRIVACY",
    links: [
      { name: "Trust & Safety", href: "/trust-and-safety" },
      { name: "Terms of Services", href: "/terms-of-services" },
      { name: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
  {
    title: "ABOUT",
    links: [
      { name: "Company", href: "/company" },
      { name: "How it works", href: "/how-it-works" },
      { name: "Contact", href: "/contact" },
      { name: "Investors", href: "/investors" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Guides", href: "/guides" },
      { name: "FAQ", href: "/faq" },
      { name: "Help Center", href: "/help-center" },
    ],
  },
];

const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebookF /> },
  { href: "https://linkedin.com", icon: <FaLinkedinIn /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <section className="w-full m-auto font-sans">
      {/* Logo and Content Container */}
      <div className="max-w-[1140px] px-6  md:py-[80px] py-[40px] m-auto flex flex-col lg:flex-row gap-[40px] lg:gap-[150px]">
        {/* Logo */}
        <Link href="/">
          {" "}
          <div className="w-[151px] h-[40px]">
            <Image src={"/logo.png"} height={40} width={151} alt="logo" />
          </div>
        </Link>

        {/* Content Grid */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {footerData.map((section) => (
            <div key={section.title} className="flex flex-col ">
              <h1 className="font-bold leading-[24px] text-[#000929] mb-4">
                {section.title}
              </h1>
              {section.links.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className="text-[#000929]  opacity-[70%] font-normal leading-[38px] hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t-[#E8E6F9] border-[1.5px] w-full">
        <div className="max-w-[1140px] m-auto py-8 px-6  flex flex-col md:flex-row gap-4 items-center justify-between">
          <h1 className="text-[#000929] opacity-[50%] font-normal leading-[25.6px]">
            &copy; 2021 Estatery, All rights reserved
          </h1>
          <div className="flex gap-[40px]">
            {socialLinks.map((social, index) => (
              <Link
                href={social.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#000929] opacity-[50%] text-xl hover:text-[#000929] hover:opacity-100"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
