import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>نخرج فين؟ | NekhrogFeen</h1>
        <p>
          تطبيق ذكي يساعدك تختار أفضل أماكن الخروج في مصر بسهولة حسب الميزانية والوقت وعدد الأشخاص.
        </p>
      </div>

      <div className="about-section">
        <h2>💡 What is NekhrogFeen?</h2>
        <p>
          NekhrogFeen is a smart trip planner that helps you discover the best places to go out in Egypt,
          including cafes, restaurants, cinemas, and activities.
        </p>
      </div>

      <div className="about-section">
        <h2>🎯 Our Mission</h2>
        <p>
          We aim to make the decision "نخرج فين النهارده؟" easy, fast, and fun by giving personalized suggestions.
        </p>
      </div>

      <div className="about-section">
        <h2>📍 What you can do here</h2>
        <ul>
          <li>Find cinemas in Cairo & Egypt</li>
          <li>Discover cafes and restaurants</li>
          <li>Plan weekend outings</li>
          <li>Choose places based on budget</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>🌍 Cities Covered</h2>
        <p>Cairo • Giza • Alexandria</p>
      </div>

      <div className="about-footer">
        <p>Made with ❤️ by Mostafa Tarek</p>
      </div>
    </div>
  );
}