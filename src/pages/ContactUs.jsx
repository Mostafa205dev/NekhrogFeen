// src/pages/ContactUs.jsx
import './ContactUs.css';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div className="contact-container">

      <div className="contact-header">
        <h1><span className="header-en">Contact Us</span> | اتصل بنا</h1>
        <p>نخرج فين — NekhrogFeen</p>
      </div>

      <div className="contact-content">

        <div className="contact-card">
          <div className="contact-icon-wrap phone">
            <FaPhone size={24} />
          </div>
          <div className="contact-info">
            <span className="contact-label-en">Phone Calls</span>
            <span className="contact-label-ar">مكالمات</span>
            <a href="tel:01023113960" className="contact-value">01023113960</a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon-wrap whatsapp">
            <FaWhatsapp size={24} />
          </div>
          <div className="contact-info">
            <span className="contact-label-en">WhatsApp</span>
            <span className="contact-label-ar">واتساب</span>
            <a href="https://wa.me/201155410622" target="_blank" rel="noreferrer" className="contact-value">01155410622</a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon-wrap email">
            <FaEnvelope size={24} />
          </div>
          <div className="contact-info">
            <span className="contact-label-en">Email</span>
            <span className="contact-label-ar">البريد الإلكتروني</span>
            <a href="mailto:seso63412@gmail.com" className="contact-value">seso63412@gmail.com</a>
          </div>
        </div>

      </div>
    </div>
  );
}