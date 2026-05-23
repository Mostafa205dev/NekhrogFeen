import { useState } from "react";
import "./TripPlanner.css";
import Labels from "../components/Labels";
import Description from "../components/Description";
import places from "../data/Places";
import Filters from "../components/Filters";
import Output from "../components/Output";
import TripList from "../components/TripList";
import { useSelector, useDispatch } from "react-redux";
import { setPlan } from "../store/planSlice";
import { setBudget, setTime } from "../store/tripSlice";

const categoryMap = {
  cinemas: "cinema",
  restaurants: "restaurant",
  cafes: "cafe",
  activities: "activity",
};

export default function TripPlanner() {
  const [selected, setSelected] = useState(["all"]);
  const [expanded, setExpanded] = useState({});
  const dispatch = useDispatch();

  const budget = useSelector((state) => state.trip.budget);
  const time = useSelector((state) => state.trip.time);
  const gang = useSelector((state) => state.trip.gang);
  const city = useSelector((state) => state.trip.city);

  const plan = useSelector((state) => state.plan.plan);

  function generatePlan() {
    dispatch(setBudget(Number(budget)));
    dispatch(setTime(Number(time)));

    const filtered = places.filter(
      (p) => p.city.includes("all") || p.city.includes(city),
    );

    const result = filtered.filter(
      (p) =>
        p.price <= Number(budget) &&
        p.duration <= Number(time) &&
        p.minPeople <= Number(gang),
    );

    dispatch(setPlan(result));
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

        <Labels />

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
            />
          )}

          {plan.length > 0 && <TripList />}
        </div>
      </div>
    </div>
  );
}
