import "./AddToTrip.css";
// import { useState } from "react";
function AddToTrip({ tripItems, budget }) {

  const totalPrice = tripItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const remainingBudget = budget - totalPrice;

  return (
    <div className="addtoTrip">

      <h2>Remaining: {remainingBudget} EGP</h2>

      {tripItems.map((item, index) => (
        <div className="item" key={index}>

          <p>
            {index + 1} - {item.name}
          </p>

          <div className="discription">
            <p>{item.price} EGP</p>
            <p>{item.duration} Hours</p>
          </div>

        </div>
      ))}

    </div>
  );
}

export default AddToTrip;