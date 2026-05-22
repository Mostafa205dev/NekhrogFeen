import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TripPlanner from './pages/TripPlanner';
import SavedTrips from './pages/SavedTrips';
import MyAccount from './pages/MyAccount';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import CategoryPage from './pages/CategoryPage';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {

  return (
    <Router>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<TripPlanner />} />
          <Route path="/savedTrips" element={<SavedTrips />} />
          <Route path="/myAccount" element={<MyAccount />} />
          <Route path="/About" element={<About />} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
