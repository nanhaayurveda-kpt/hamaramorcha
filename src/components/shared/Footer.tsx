import Link from "next/link";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              हमारा मोर्चा
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              सम्मान और रोज़ी-रोटी की लड़ाई
            </p>
          </div>

          <div className="flex space-x-6 text-gray-600 dark:text-gray-400">
            <Link
              href="/team"
              className="hover:text-gray-900 dark:hover:text-white"
            >
              हमारी टीम
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-900 dark:hover:text-white"
            >
              संपर्क करें
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-gray-900 dark:hover:text-white"
            >
              प्राइवेसी पॉलिसी
            </Link>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://wa.me/919996865069"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <AiOutlineWhatsApp size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Kamta Prasad. सर्वाधिकार सुरक्षित। |
            वेबसाइट · मोबाइल ऐप बनवाने के लिए{" "}
            <a
              href="https://www.nishantsoftwares.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              Nishant Softwares
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;