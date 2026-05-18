import { useState } from "react";
import "./Output.css";

export default function Output({ plan }) {
  const [expanded, setExpanded] = useState({});

  return (
    <div className="output">
      <h2>Suggested Itinerary</h2>

      <div className="result">
        {Object.entries(
          plan.reduce((groups, place) => {
            if (!groups[place.category]) {
              groups[place.category] = [];
            }

            groups[place.category].push(place);
            return groups;
          }, {}),
        ).map(([category, items]) => {
          const isExpanded = expanded[category];
          const visibleItems = isExpanded ? items : items.slice(0, 3);

          return (
            <div className="category-card" key={category}>
              <div className="category-header">
                <h2>{category}</h2>

                {items.length > 3 && (
                  <button
                    className="view-more-btn"
                    onClick={() =>
                      setExpanded({
                        ...expanded,
                        [category]: !isExpanded,
                      })
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
