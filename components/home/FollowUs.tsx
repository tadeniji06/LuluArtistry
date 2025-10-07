import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function FollowUs() {
  return (
    <div className="p-6 sm:p-8 mt-8 bg-gray-50 rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
      <p className="mb-6 text-gray-700">Stay connected with us on social media for updates, offers, and more!</p>
      <div className="flex justify-center gap-6 text-3xl text-primary-gold">
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://wa.me/234XXXXXXXXXX" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}