// src/pages/PrivacyPolicy.jsx
import "./PrivacyPolicy.css";
const sections = [
  {
    icon: "📋",
    title: { ar: "مقدمة", en: "Introduction" },
    content: {
      ar: (
        <p>
          مرحباً بك في <strong>نخرج فين</strong>. نحن نحترم خصوصيتك ونلتزم
          بحماية بياناتك الشخصية. توضح هذه السياسة كيفية جمع بياناتك واستخدامها
          عند استخدامك لموقعنا.
        </p>
      ),
      en: (
        <p>
          Welcome to <strong>NekhrogFeen</strong>. We respect your privacy and
          are committed to protecting your personal data. This policy explains
          how we collect and use your data when you use our website.
        </p>
      ),
    },
  },
  {
    icon: "📊",
    title: { ar: "البيانات التي نجمعها", en: "Data We Collect" },
    content: {
      ar: (
        <ul>
          <li>
            بيانات الاستخدام مثل الصفحات التي تزورها والوقت الذي تقضيه عليها
          </li>
          <li>نوع المتصفح ونظام التشغيل</li>
          <li>عنوان IP بشكل مجهول</li>
          <li>الإجراءات التي تقوم بها داخل الموقع</li>
        </ul>
      ),
      en: (
        <ul>
          <li>Usage data such as pages you visit and time spent on them</li>
          <li>Browser type and operating system</li>
          <li>Anonymized IP address</li>
          <li>Actions you perform within the website</li>
        </ul>
      ),
    },
  },
  {
    icon: "🎯",
    title: { ar: "كيف نستخدم بياناتك", en: "How We Use Your Data" },
    content: {
      ar: (
        <ul>
          <li>تحسين تجربة المستخدم وأداء الموقع</li>
          <li>تحليل كيفية استخدام الموقع لتطويره</li>
          <li>عرض توصيات مخصصة حسب تفضيلاتك</li>
        </ul>
      ),
      en: (
        <ul>
          <li>Improving user experience and website performance</li>
          <li>Analyzing how the site is used to develop it further</li>
          <li>
            Showing personalized recommendations based on your preferences
          </li>
        </ul>
      ),
    },
  },
  {
    icon: "🔗",
    title: {
      ar: "مشاركة البيانات مع أطراف ثالثة",
      en: "Third-Party Data Sharing",
    },
    content: {
      ar: (
        <p>
          نستخدم <strong>Google Analytics</strong> لتحليل الزيارات. لا نبيع
          بياناتك الشخصية لأي طرف ثالث.
        </p>
      ),
      en: (
        <p>
          We use <strong>Google Analytics</strong> to analyze traffic. We do not
          sell your personal data to any third party.
        </p>
      ),
    },
  },
  {
    icon: "🍪",
    title: { ar: "الكوكيز", en: "Cookies" },
    content: {
      ar: (
        <p>
          يستخدم موقعنا الكوكيز لتحسين تجربتك. يمكنك تعطيل الكوكيز من إعدادات
          متصفحك في أي وقت.
        </p>
      ),
      en: (
        <p>
          Our website uses cookies to improve your experience. You can disable
          cookies from your browser settings at any time.
        </p>
      ),
    },
  },
  {
    icon: "🔒",
    title: { ar: "أمان البيانات", en: "Data Security" },
    content: {
      ar: (
        <p>
          نتخذ إجراءات تقنية وتنظيمية مناسبة لحماية بياناتك من الوصول غير المصرح
          به.
        </p>
      ),
      en: (
        <p>
          We take appropriate technical and organizational measures to protect
          your data from unauthorized access.
        </p>
      ),
    },
  },
  {
    icon: "✏️",
    title: { ar: "التحديثات", en: "Updates" },
    content: {
      ar: (
        <p>
          قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم نشر أي تغييرات على هذه
          الصفحة.
        </p>
      ),
      en: (
        <p>
          We may update this policy from time to time. Any changes will be
          published on this page.
        </p>
      ),
    },
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h1>
          <span className="header-en">Privacy Policy</span> | سياسة الخصوصية
        </h1>
        <p>NekhrogFeen — نخرج فين | nekhrogfeen.app</p>
      </div>

      <div className="privacy-content">
        {sections.map((section, i) => (
          <div key={i} className="privacy-card">
            <h2>
              <span className="card-icon">{section.icon}</span>
              <span className="title-en">{section.title.en}</span>
              <span className="title-divider">|</span>
              <span className="title-ar">{section.title.ar}</span>
            </h2>
            <div className="bilingual-content">
              <div className="content-en">{section.content.en}</div>
              <div className="content-ar">{section.content.ar}</div>
            </div>
          </div>
        ))}

        <div className="privacy-contact">
          <h2>Contact Us | تواصل معنا</h2>
          <p>For any inquiries — لأي استفسار</p>
          <a href="mailto:mostafatarek1125@gmail.com">mostafatarek1125@gmail.com</a>
          <a href="mailto:seso63412@gmail.com">seso63412@gmail.com</a>
        </div>

        <p className="privacy-date">
          Last updated — آخر تحديث: مايو / May 2026
        </p>
      </div>
    </div>
  );
}
