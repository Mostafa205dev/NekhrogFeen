import { useState } from "react";
import "./TripPlanner.css";
import Labels from "../components/Labels";
import Description from "../components/Description";
import places from "../data/Places";
import Filters from "../components/Filters";
import Output from "../components/Output";
import AddToTrip from "../components/AddToTrip";

const categoryMap = {
  cinemas: "cinema",
  restaurants: "restaurant",
  cafes: "cafe",
  activities: "activity",
};

export default function TripPlanner() {
  const [budget, setBudget] = useState("800");
  const [time, setTime] = useState("8");
  const [gang, setGang] = useState("5");
  const [city, setCity] = useState("cairo");

  const [plan, setPlan] = useState([]);

  const [selected, setSelected] = useState(["all"]);
  const [expanded, setExpanded] = useState({});
  const [tripItems, setTripItems] = useState([]);
  
  function generatePlan() {
    const filtered = places.filter((p) => p.city === "all" || p.city === city);

    const result = filtered.filter(
      (p) =>
        p.price <= Number(budget) &&
        p.duration <= Number(time) &&
        p.minPeople <= Number(gang),
    );

    setPlan(result);
  }

  const filteredPlan = selected.includes("all")
    ? plan
    : plan.filter((p) =>
        selected.map((s) => categoryMap[s]).includes(p.category),
      );

  const grouped = filteredPlan.reduce((groups, place) => {
    if (!groups[place.category]) groups[place.category] = [];
    groups[place.category].push(place);
    return groups;
  }, {});

  return (
    <div className="main">
      <div
        className="body"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/Background.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
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

        {plan.length > 0 && (
          <Filters selected={selected} setSelected={setSelected} />
        )}

        <div className="test">
          {plan.length > 0 && (
            <Output
              grouped={grouped}
              expanded={expanded}
              setExpanded={setExpanded}
              tripItems={tripItems}
              setTripItems={setTripItems}
              budget={Number(budget)}
              time={Number(time)}
            />
          )}

          {plan.length > 0 && (
            <AddToTrip
              tripItems={tripItems}
              setTripItems={setTripItems} 
              budget={Number(budget)}
              time={Number(time)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
