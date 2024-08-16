import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-center p-4 mt-8 w-full bg-white ">
      <div className="flex items-center justify-center space-x-4">
        <Image src="/kii.webp" alt="logo" width="50" height="50" />
        <h1 className="text-xl text-black">
          Learn more about <strong>(KiiChain)</strong>,{" "}
          <a
            className="text-purple-300 no-underline hover:underline hover:text-purple-700"
            href="https://docs.kiiglobal.io/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Documentation.
          </a>
        </h1>
        <Image src="/kii.webp" alt="logo" width="50" height="50" />
      </div>
    </footer>
  );
};

export default Footer;
