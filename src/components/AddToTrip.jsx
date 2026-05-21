import "./AddToTrip.css";


function AddToTrip({ tripItems, budget, time }) {
  const totalPrice = tripItems.reduce((sum, item) => sum + item.price, 0);

  const totalTime = tripItems.reduce((sum, item) => sum + item.duration, 0);

  const remainingTime = time - totalTime;

  const remainingBudget = budget - totalPrice;

  return (
    <div className="addtoTrip">
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
            <p>{item.duration} Hours</p>
          </div>
        </div>
      ))}
      <button>Confirm</button>
    </div>
  );
}

export default AddToTrip;
