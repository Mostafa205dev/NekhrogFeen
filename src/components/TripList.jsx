import "./TripList.css";
import { useDispatch, useSelector } from "react-redux";

import { removeFromTrip } from "../store/tripSlice";

function TripList() {
  const dispatch = useDispatch();

  const tripItems = useSelector(state => state.trip.tripItems);
  const budget = useSelector(state => state.trip.budget);
  const time = useSelector(state => state.trip.time);
  const totalPrice = tripItems.reduce((sum, item) => sum + item.price, 0);

  const totalTime = tripItems.reduce((sum, item) => sum + item.duration, 0);

  const remainingTime = time - totalTime;

  const remainingBudget = budget - totalPrice;

  function removeItem(index) {
    dispatch(removeFromTrip(index));
  }

  
  return (
    <div className="TripList">
      <div className="leftthings">
        <h3>MoneyLeft: {remainingBudget}EGP</h3>
        <h3>TimeLeft: {remainingTime}Hours</h3>
      </div>

      {tripItems.map((item, index) => (
        <div className="item" key={index}>
          <p>
            {index + 1} - {item.name}
          </p>

          <div className="discription">
            <p>{item.price} EGP</p>
            <p>⏲{item.duration} Hours</p>
            <button onClick={() => removeItem(index)}>x</button>
          </div>
        </div>
      ))}
      <button>Confirm</button>
    </div>
  );
}

export default TripList;
