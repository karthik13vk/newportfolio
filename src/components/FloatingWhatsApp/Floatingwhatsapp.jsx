import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Floatingwhatsapp.scss";


const Floatingwhatsapp = () => {
  const phoneNumber = "919944658008";

  const message =
    "Hi Karthik! I visited your portfolio and would like to connect with you.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <div>
      <a
        href={whatsappURL}
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with me on WhatsApp"
      >
        <FaWhatsapp />

        <span className="whatsapp-tooltip">Chat with me</span>
      </a>
    </div>
  );
};

export default Floatingwhatsapp;
