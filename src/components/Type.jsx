import search from "../media/search.svg";
import mobile from "../media/mobile.svg";
import design from "../media/design.svg";
import feature from "../media/feature.svg";

export default function FeaturesSection() {
  const features = [
    {
      icon: design,
      title: "Özel Tasarım",
      text: "Kendinize özgü fontlar, renkler, logolar ve yerleşimlerle markanıza özel bir tasarım oluşturuyoruz. Işıklı galeri, animasyonlu geçişler gibi ekstra özelliklerle web sitenizi canlandırıyoruz.",
    },
    {
      icon: feature,
      title: "Gelişmiş Özellikler",
      text: "E-ticaret, blog, e-posta kampanyaları ve analiz sistemleri gibi tüm güçlü araçları entegre ediyoruz. Sitenizi işlevsel hale getirerek dijital işlerinizi kolaylaştırıyoruz.",
    },
    {
      icon: mobile,
      title: "Mobil Uyum",
      text: "Telefon ve tablet kullanıcıları için kusursuz görünüm sağlıyoruz. Tüm cihazlarda hızlı, okunabilir ve estetik bir deneyim için her ekran boyutuna özel optimize ediyoruz.",
    },
    {
      icon: search,
      title: "SEO Odaklı",
      text: "Google ve diğer arama motorlarında üst sıralara çıkmanız için teknik ve içeriksel SEO stratejileri uyguluyoruz.",
    },
  ];

  function formatPhoneNumber(value) {
    // Sadece rakamları al
    const digits = value.replace(/\D/g, '').slice(0, 11);
    let formatted = '';
    if (digits.length > 0) formatted += digits.slice(0, 3);
    if (digits.length > 3) formatted += ' ' + digits.slice(3, 6);
    if (digits.length > 6) formatted += ' ' + digits.slice(6, 8);
    if (digits.length > 8) formatted += ' ' + digits.slice(8, 10);
    return formatted;
  }

  return (
    <section className="py-10 md:py-24 px-2 md:px-4 bg-white">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <span className="inline-block px-3 py-1 text-sm text-gray-600 bg-[#dbe4ec] rounded-full mb-4">
          • Özellikler
        </span>
        <h2 className="text-[28px] md:text-[34px] font-semibold text-[#1f2937] tracking-tight mb-3">
          Güvenilir Varonsoft Web Tasarım Hizmetleri
        </h2>
        <p className="text-[15px] text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Varonsoft olarak, markanızı etkili şekilde öne çıkaracak etkileyici
          web siteleri oluşturmak için kapsamlı hizmetler sunuyoruz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto px-2 md:px-0">
        {features.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-4 md:p-6 flex flex-col justify-start transition-all duration-300 bg-white hover:bg-[#506C83] hover:text-white hover:shadow-lg group"
          >
            <div className="w-12 h-12 mb-4 transition-all duration-300 group-hover:brightness-0 group-hover:invert flex items-center justify-center">
              <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-[17px] font-semibold text-[#1f2937] mb-2 transition-colors duration-300 group-hover:text-white">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300 leading-snug">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
