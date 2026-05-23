import cinemas from "./Cinemas";
import restaurants from "./Restaurants";
import activities from "./Activities";
import cafes from "./Cafes";

const places = [...cinemas, ...restaurants,...cafes, ...activities];

export default places;
