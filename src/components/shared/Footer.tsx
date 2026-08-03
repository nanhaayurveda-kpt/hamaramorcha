import Link from "next/link";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900">हमारा मोर्चा</h2>
            <p className="mt-2 text-gray-600">सफेदपोश मरभुक्खों अर्थात नाममात्र के वेतन पर खटने वाले बौद्धिक-जनों की भी पीड़ा को स्वर देने का मंच</p>
          </div>

          <div className="flex space-x-6 text-gray-600">
            <Link href="/team" className="hover:text-gray-900">
              हमारी टीम
            </Link>
            <Link href="/contact" className="hover:text-gray-900">
              संपर्क करें
            </Link>
            <Link href="/privacy-policy" className="hover:text-gray-900">
              प्राइवेसी पॉलिसी
            </Link>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://wa.me/919996865069"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-gray-600 hover:text-gray-900"
            >
              <AiOutlineWhatsApp size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Kamta Prasad. सर्वाधिकार सुरक्षित।
            | वेबसाइट · मोबाइल ऐप बनवाने के लिए{" "}
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