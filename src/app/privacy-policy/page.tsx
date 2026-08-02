export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">गोपनीयता नीति</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">परिचय</h2>
          <p>
            हमारा मोर्चा आपकी गोपनीयता की रक्षा के लिए प्रतिबद्ध है। यह नीति
            बताती है कि हम आपकी व्यक्तिगत जानकारी को कैसे एकत्र, उपयोग और
            सुरक्षित करते हैं।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">जानकारी संग्रह</h2>
          <p>हम निम्नलिखित प्रकार की जानकारी एकत्र कर सकते हैं:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>नाम और संपर्क जानकारी</li>
            <li>ईमेल पता</li>
            <li>उपयोग डेटा और प्राथमिकताएं</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">जानकारी का उपयोग</h2>
          <p>हम आपकी जानकारी का उपयोग इन उद्देश्यों के लिए करते हैं:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>सेवाएं प्रदान करना और बनाए रखना</li>
            <li>उपयोगकर्ता अनुभव में सुधार करना</li>
            <li>महत्वपूर्ण अपडेट और सूचनाएं भेजना</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">डेटा सुरक्षा</h2>
          <p>
            हम आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए उचित तकनीकी और
            संगठनात्मक उपाय करते हैं। हालांकि, इंटरनेट पर कोई भी प्रसारण पूरी
            तरह सुरक्षित नहीं होता।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">तृतीय पक्ष सेवाएं</h2>
          <p>
            हम तृतीय पक्ष सेवाओं का उपयोग कर सकते हैं जो अपनी गोपनीयता नीतियों
            के अधीन हैं। इन नीतियों के लिए हम जिम्मेदार नहीं हैं।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">आपके अधिकार</h2>
          <p>
            आपको अपनी व्यक्तिगत जानकारी तक पहुंचने, उसे सुधारने या हटाने का
            अधिकार है। इन अधिकारों के प्रयोग के लिए हमसे संपर्क करें।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">नीति में बदलाव</h2>
          <p>
            हम समय-समय पर इस नीति को अपडेट कर सकते हैं। किसी भी बदलाव की सूचना
            इसी पृष्ठ पर दी जाएगी।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">संपर्क</h2>
          <p>इस नीति के बारे में कोई प्रश्न हो तो हमसे संपर्क करें:</p>
          <div className="mt-3 space-y-1">
            <p>
              ईमेल:{" "}
              <a
                href="mailto:hamaramorcha1153@gmail.com"
                className="text-blue-600 hover:underline"
              >
                hamaramorcha1153@gmail.com
              </a>
            </p>
            <p>
              फोन:{" "}
              <a
                href="tel:+919996865069"
                className="text-blue-600 hover:underline"
              >
                +91 9996865069
              </a>
            </p>
          </div>
        </section>

        <section className="mt-8 pt-6 border-t">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            अंतिम अपडेट: अगस्त 2026
          </p>
        </section>
      </div>
    </div>
  );
}