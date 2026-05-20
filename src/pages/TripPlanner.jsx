import { useState } from "react";
import "./TripPlanner.css";
import Labels from "../components/Labels";
import Description from "../components/Description";
import places from "../data/Places";
import Filters from "../components/Filters";
// import AddToTrip from "../components/AddToTrip";
export default function TripPlanner() {
  const [budget, setBudget] = useState("800");
  const [time, setTime] = useState("8");
  const [gang, setGang] = useState("5");
  const [city, setCity] = useState("cairo");
  const [plan, setPlan] = useState([]);

  function generatePlan() {
    const filtered = places.filter((p) => p.city === "all" || p.city === city);

    const result = filtered.filter(
      (p) => p.price <= Number(budget) && p.duration <= Number(time) && p.minPeople <= Number(gang),
    );

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

        {plan.length > 0 && <Filters plan={plan} budget={Number(budget)}/>}
      </div>
    </div>
  );
}
