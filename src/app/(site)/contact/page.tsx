import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "संपर्क करें",
  description: "हमारा मोर्चा से संपर्क करने के लिए पता, फोन और ईमेल",
};

export default function ContactPage() {
  return (
    <div className="py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-fuchsia-700 mb-8">संपर्क करें</h1>

      <div className="border-4 border-teal-700 bg-amber-700 text-zink-600 rounded-lg p-6 space-y-6">
        <div className="border-b-4 border-sky-600 pb-4">
          <h2 className="text-xl font-semibold mb-2">संपादक</h2>
          <p className="text-lg">कामता प्रसाद (कार्यकारी संपादक)</p>
        </div>

        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold mb-2">ईमेल</h2>

          <a
            href="mailto:hamaramorcha1153@gmail.com"
            className="text-rose-700 hover:underline text-xl"
          >
            hamaramorcha1153@gmail.com
          </a>
        </div>

        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold mb-2">फोन</h2>

          <a
            href="tel:+919996865069"
            className="text-pink-700 hover:underline text-xl"
          >
            +919996865069
          </a>
        </div>

        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold mb-2">WhatsApp</h2>

          <a
            href="https://wa.me/919996865069"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-lg"
          >
            संदेश भेजें
          </a>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">पता</h2>
          <p className="leading-relaxed">
            तिवारी भवन, ग्रामः गहरपुर,
            <br />
            पोस्टः पुआरीकलां-221202,
            <br />
            वाराणसी, उत्तर प्रदेश, भारत
          </p>
        </div>
      </div>
    </div>
  );
}
