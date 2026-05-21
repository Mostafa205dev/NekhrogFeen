import "./Output.css";

function Output({
  grouped,
  expanded,
  setExpanded,
  tripItems,
  setTripItems,
  budget,
  time,
}) {
  const totalPrice = tripItems.reduce((sum, item) => sum + item.price, 0);

  const totalTime = tripItems.reduce((sum, item) => sum + item.duration, 0);

  function addToTrip(item) {
    if (totalPrice + item.price <= budget) {
      if (totalTime + item.duration <= time) {
        setTripItems([
          ...tripItems,
          {
            name: item.name,
            price: item.price,
            duration: item.duration,
          },
        ]);
      } else {
        alert("Time exceeded!");
      }
    } else {
      alert("Budget exceeded!");
    }
  }

  return (
    <div className="output">
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

                    <div>
                      <p>
                        💰 {item.price} EGP
                        <br />⏰ {item.duration} Hours
                      </p>

                      <button onClick={() => addToTrip(item)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Output;
