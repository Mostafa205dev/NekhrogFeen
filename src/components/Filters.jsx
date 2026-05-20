import { useState, useEffect } from "react";
import "./Filters.css";

const categoryMap = {
  cinemas: "cinema",
  restaurants: "restaurant",
  cafes: "cafe",
  activities: "activity",
};

const availableCategories = ["cinemas", "restaurants", "cafes", "activities"];

function Filters({ plan }) {
  const [selected, setSelected] = useState(["all"]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    setSelected(["all"]);
    setExpanded({});
  }, [plan]);

  function handleCheck(category) {
    if (category === "all") {
      setSelected(["all"]);
      return;
    }

    let newSelected = selected.filter((s) => s !== "all");

    if (newSelected.includes(category)) {
      newSelected = newSelected.filter((s) => s !== category);
    } else {
      newSelected.push(category);
    }

    if (newSelected.length === 0) {
      setSelected(["all"]);
    } else {
      setSelected(newSelected);
    }
  }

  const filteredPlan = selected.includes("all")
    ? plan
    : plan.filter((p) => selected.map((s) => categoryMap[s]).includes(p.category));

  const grouped = filteredPlan.reduce((groups, place) => {
    if (!groups[place.category]) groups[place.category] = [];
    groups[place.category].push(place);
    return groups;
  }, {});

  return (
    <div className="output">
      {/* Filter Buttons */}
      <div className="filternav">
        <label className="option">
          <p>ALL</p>
          <input
            type="checkbox"
            checked={selected.includes("all")}
            onChange={() => handleCheck("all")}
          />
        </label>
        {availableCategories.map((category) => (
          <label key={category} className="option">
            <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
            <input
              type="checkbox"
              checked={selected.includes(category)}
              onChange={() => handleCheck(category)}
            />
          </label>
        ))}
      </div>

      {/* Results */}
      <div className="result">
        {Object.entries(grouped).map(([category, items]) => {
          const isExpanded = expanded[category];
          const visibleItems = isExpanded ? items : items.slice(0, 3);

          return (
            <div className="category-card" key={category}>
              <div className="category-header">
                <h2>{category.charAt(0).toUpperCase() + category.slice(1)}s</h2>
                {items.length > 3 && (
                  <button
                    className="view-more-btn"
                    onClick={() =>
                      setExpanded({ ...expanded, [category]: !isExpanded })
                    }
                  >
                    {isExpanded ? "View Less" : "View More"}
                  </button>
                )}
              </div>

              <div className="items">
                {visibleItems.map((item, index) => (
                  <div className="place-item" key={index}>
                    <img src={item.image} alt="" />
                    <div className="itemDiscription">
                      <h3>{item.name}</h3>
                      <p>
                        💰 {item.price} EGP
                        <br />⏰ {item.duration} Hours
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Filters;