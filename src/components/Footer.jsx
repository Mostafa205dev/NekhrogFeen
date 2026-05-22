import "./Footer.css";
import { Link } from 'react-router-dom';


import {
  FaWhatsapp,
  FaPhone,
  FaLinkedin,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <h3 className="icon">NekhrogFeen</h3>
      <div className="links">
        <p>
          <FaPhone />
          01023113960
        </p>
        <p>
          <FaWhatsapp size={30} color="green" />
          01155410622
        </p>
        <a
          href="https://www.linkedin.com/in/mostafa-tarek-448665250/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={25} color="#0A66C2" />
        </a>
        <a
          href="https://www.facebook.com/mostafa.tarek.678889"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook size={25} color="#0A66C2" />
        </a>
        <a
          href="https://github.com/Mostafa205dev"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={25} color="#0A66C2" />
        </a>
        <Link
          to="/privacy-policy"
          style={{ color: "#6b7280", fontSize: "0.85rem" }}
        >
         PrivacyPolicy - سياسة الخصوصية
        </Link>
      </div>
      <h3 className="rights">Mostafa Tarek Hassanien</h3>
    </div>
  );
}
