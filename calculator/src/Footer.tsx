import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="py-4 text-center">
      <div className="mb-2">
        <a
          href="https://github.com/limitedink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          GitHub
        </a>
      </div>
      <div className="text-sm">
        <p>&copy; 2023 limitedink</p>
      </div>
    </footer>
  );
}

export default Footer;
