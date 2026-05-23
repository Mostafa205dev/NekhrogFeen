import "./Labels.css";
import { useSelector, useDispatch } from "react-redux";
import { setBudget, setTime, setGang, setCity } from "../store/tripSlice";

export default function Labels() {
  const dispatch = useDispatch();
  const budget = useSelector((state) => state.trip.budget);
  const time = useSelector((state) => state.trip.time);
  const gang = useSelector((state) => state.trip.gang);
  const city = useSelector((state) => state.trip.city);

  return (
    <div className="labels">
      <label className="input-label label1">
        <h3>💵BUDGET:</h3>
        <input
          type="number"
          value={budget}
          onChange={(e) => dispatch(setBudget(Number(e.target.value)))}
          placeholder="Budget"
        />
      </label>

      <label className="input-label label2">
        <h3>⏰TIME AVAILABLE:</h3>
        <input
          type="number"
          value={time}
          onChange={(e) => dispatch(setTime(Number(e.target.value)))}
          placeholder="Time"
        />
      </label>

      <label className="input-label label3">
        <h3>👥Number of GANG:</h3>
        <input
          type="number"
          value={gang}
          onChange={(e) => dispatch(setGang(Number(e.target.value)))}
          placeholder="Number of People"
        />
      </label>

      <label className="input-label label4">
        <h3>📍City:</h3>
        <select
          value={city}
          onChange={(e) => dispatch(setCity(e.target.value))}
        >
          <option value="cairo">Cairo</option>
          <option value="alexandria">Alexandria</option>
          <option value="giza">Giza</option>
        </select>
      </label>
    </div>
  );
}
