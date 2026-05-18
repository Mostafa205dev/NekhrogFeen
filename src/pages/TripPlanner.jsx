import { useState } from "react";
import "./TripPlanner.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Labels from "../components/Labels";
import Output from "../components/Output";
import Description from "../components/Description";
import places from "../data/Places";

export default function TripPlanner() {
  const [budget, setBudget] = useState("800");
  const [time, setTime] = useState("8");
  const [gang, setGang] = useState("5");
  const [city, setCity] = useState("cairo");
  const [plan, setPlan] = useState([]);

  function generatePlan() {
    let remainingTime = time;
    let remainingBudget = budget;

    const result = [];

    const filtered = places.filter((p) => p.city === city);

    const categories = [...new Set(filtered.map((p) => p.category))];

    for (let category of categories) {
      const categoryPlaces = filtered.filter((p) => p.category === category);
      
      const minDuration = Math.min(...categoryPlaces.map((p) => p.duration));

      const minPrice = Math.min(...categoryPlaces.map((p) => p.price));

      if (remainingTime >= minDuration && remainingBudget >= minPrice) {
        result.push(...categoryPlaces);

        remainingTime -= minDuration;
        remainingBudget -= minPrice;
      }
    }

    setPlan(result);
  }

  return (
    <div className="main">
      <Header />
      <div className="body">
        <Description />

        <Labels
          budget={budget}
          setBudget={setBudget}
          time={time}
          setTime={setTime}
          gang={gang}
          setGang={setGang}
          city={city}
          setCity={setCity}
        />

        <button onClick={generatePlan}>Generate Plan</button>

        <Output plan={plan} />

        <Footer />
      </div>
    </div>
  );
}
