import { useDispatch, useSelector } from "react-redux";
import "./Output.css";
import { useNavigate } from "react-router-dom";
import { addToTrip } from "../store/tripSlice";

function Output({ grouped, expanded, setExpanded}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const budget = useSelector(state => state.trip.budget);
  const time = useSelector(state => state.trip.time);
  const tripItems = useSelector((state) => state.trip.tripItems);

  const totalPrice = tripItems.reduce((sum, item) => sum + item.price, 0);

  const totalTime = tripItems.reduce((sum, item) => sum + item.duration, 0);

  function handleAdd(item) {
    if (totalPrice + item.price > budget) {
      alert("Budget exceeded!");
      return;
    }

    if (totalTime + item.duration > time) {
      alert("Time exceeded!");
      return;
    }

    dispatch(addToTrip(item));
  }

  const translations = {
    cinema: "سنيمات",
    restaurant: "مطاعم",
    cafe: "كافيهات",
    activity: "أنشطة",
  };

  return (
    <div className="output">
      {Object.entries(grouped).map(([category, items]) => {
        const isExpanded = expanded[category];

        const visibleItems = isExpanded ? items : items.slice(0, 3);

        return (
          <div className="category-card" key={category}>
            <div className="category-header">
              <h2>
                {category.charAt(0).toUpperCase() + category.slice(1)}s -{" "}
                {translations[category]}
              </h2>

              {items.length > 3 && (
                <button
                  className="view-more-btn"
                  onClick={() =>
                    navigate(`/${category}`)
                  }
                >
                  View More
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

                      <button onClick={() => handleAdd(item)}>+</button>
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
