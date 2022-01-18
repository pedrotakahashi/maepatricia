import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';

const WppComponent = () => (
  <OverlayTrigger
    placement="left"
    overlay={<Tooltip>Precisando de ajuda?</Tooltip>}
  >
    <a
      href="https://api.whatsapp.com/send?phone=5511984002407&text=Ol%C3%A1%20M%C3%A3e%20Patr%C3%ADcia!%20Eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20voc%C3%AA%20pode%20me%20ajudar."
      target="_blank"
      className="icon-wpp-button"
      rel="noreferrer"
    >
      <i>
        <FaWhatsapp className="wpp-icon" />
      </i>
    </a>
  </OverlayTrigger>

);

export default WppComponent;
