import { useState } from "react";
import "./TripPlanner.css";
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
    let remainingTime = Number(time);
    let remainingBudget = Number(budget);

    const result = [];
    const filtered = places.filter((p) => p.city === "all" || p.city === city);

    const categories = [...new Set(filtered.map((p) => p.category))];

    for (let category of categories) {
      const categoryPlaces = filtered.filter((p) => p.category === category);

      const affordable = categoryPlaces.filter(
        (p) => p.price <= remainingBudget && p.duration <= remainingTime,
      );

      if (affordable.length > 0) {
        const cheapest = affordable.reduce((a, b) =>
          a.price < b.price ? a : b,
        );

        result.push(...affordable);
        remainingBudget -= cheapest.price;
        remainingTime -= cheapest.duration;
      }
    }

    setPlan(result);
  }

  return (
    <div className="main">
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

        {plan.length > 0 && <Output plan={plan} />}
      </div>
    </div>
  );
}
