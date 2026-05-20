import "./Filters.css";
const availableCategories = [
  "cinemas",
  "restaurants",
  "cafes",
  "activities",
];

function Filters({ selected, setSelected }) {
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

  return (
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
          <p>{category}</p>

          <input
            type="checkbox"
            checked={selected.includes(category)}
            onChange={() => handleCheck(category)}
          />
        </label>
      ))}
    </div>
  );
}

export default Filters;