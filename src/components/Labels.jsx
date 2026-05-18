import "./Labels.css";
export default function Labels({
  budget,
  setBudget,
  time,
  setTime,
  gang,
  setGang,
  city,
  setCity,
}) {
  return (
    <div className="labels">
      <label className="input-label label1">
        <h3>💵BUDGET:</h3>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          placeholder="Budget"
        />
      </label>

      <label className="input-label label2">
        <h3>⏰TIME AVAILABLE:</h3>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
          placeholder="Time"
        />
      </label>

      <label className="input-label label3">
        <h3>👥Number of GANG:</h3>
        <input
          type="number"
          value={gang}
          onChange={(e) => setGang(Number(e.target.value))}
          placeholder="Number of People"
        />
      </label>

      <label className="input-label label4">
        <h3>📍City:</h3>
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="cairo">Cairo</option>
          <option value="alexandria">Alexandria</option>
          <option value="giza">Giza</option>
          <option value="luxor">Luxor</option>
        </select>
      </label>
    </div>
  );
}
