import Link from "next/link";
import { AiOutlineWhatsApp } from "react-icons/ai";

const footerLinks = [
  { href: "/team", label: "हमारी टीम" },
  { href: "/contact", label: "संपर्क करें" },
  { href: "/privacy-policy", label: "प्राइवेसी पॉलिसी" },
];

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <h2 className="text-3xl font-bold text-red-700">हमारा मोर्चा</h2>
            <div className="mt-3 h-1 w-36 bg-green-700" />
            <p className="mt-4 max-w-md text-xl leading-relaxed text-purple-700">
              सफेदपोश मरभुक्खों अर्थात नाममात्र के वेतन पर खटने वाले
              बौद्धिक-जनों की भी पीड़ा को स्वर देने का मंच
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              पृष्ठ
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 transition-colors hover:text-red-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              संपर्क
            </h3>
            <a
              href="https://wa.me/919996865069"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:border-green-500 hover:text-green-600"
            >
              <AiOutlineWhatsApp size={20} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center">
          <p className="text-xs leading-relaxed text-gray-500">
            &copy; {new Date().getFullYear()} Kamta Prasad. सर्वाधिकार सुरक्षित।
          </p>
          <p className="mt-1 text-xs text-gray-500">
            वेबसाइट · मोबाइल ऐप बनवाने के लिए{" "}
            <a
              href="https://www.nishantsoftwares.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-700 underline-offset-2 hover:text-red-500 hover:underline"
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