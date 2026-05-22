import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToTrip } from "../store/tripSlice";
import places from "../data/Places";
import "./CategoryPage.css";
import TripList from "../components/TripList";
import { Helmet } from "react-helmet";
export default function CategoryPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category } = useParams();

  const validCategories = ["cinema", "restaurant", "cafe", "activity"];

  // ❌ لازم أول حاجة
  if (!validCategories.includes(category)) {
    return (
      <div>
        <h1>404 Not Found</h1>
        <button onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    );
  }

  const seoData = {
    cinema: {
      title: "أفضل السينمات في مصر | NekhrogFeen",
      desc: "اكتشف أفضل السينمات في مصر واحجز خروجتك بسهولة.",
    },

    restaurant: {
      title: "أفضل المطاعم في مصر | NekhrogFeen",
      desc: "دليل أفضل المطاعم في القاهرة والإسكندرية.",
    },
  };

  const defaultSEO = {
    title: "NekhrogFeen | أفضل خروجات في مصر",
    desc: "اكتشف أفضل الأماكن والخروجات في مصر حسب ميزانيتك ووقتك.",
  };

  const currentSEO = seoData[category] || defaultSEO;

  const items = places.filter(
    (item) => item.category === category
  );

  function handleAdd(item) {
    dispatch(addToTrip(item));
  }

  return (
    <div className="cinemas-page">

      <Helmet>
        <title>{currentSEO.title}</title>

        <meta name="description" content={currentSEO.desc} />
        <meta property="og:title" content={currentSEO.title} />
        <meta property="og:description" content={currentSEO.desc} />

        <link
          rel="canonical"
          href={`https://nekhrogfeen.app/${category}`}
        />
      </Helmet>

      <TripList />

      <h1>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>

      <button className="home-btn" onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>

      <div className="list">
        {items.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <p>💰 {item.price} EGP</p>
            <p>⏰ {item.duration} Hours</p>

            <button onClick={() => handleAdd(item)}>
              Add +
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}