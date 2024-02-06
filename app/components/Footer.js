import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-40 bgGray">
      <div className="flex flex-wrap textBig justify-center space-x-4 py-2">
        <a
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300"
          type="button"
          href="https://github.com/Craigj915"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300"
          type="button"
          href="https://www.linkedin.com/in/craigj915/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300"
          type="button"
          href="https://wa.me/447549521803"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whatsapp
        </a>
        <a
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300"
          type="button"
          href="mailto:craigj915@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gmail
        </a>
      </div>
      <div className="flex flex-wrap justify-center textBig text-center space-x-4 py-2">
        &copy; {currentYear} Craig Johnson. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
