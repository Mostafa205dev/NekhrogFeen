import { useNavigate, useParams } from "react-router-dom";

import places from "../data/Places";
import "./CategoryPage.css";
import TripList from "../components/TripList";
import Output from "../components/Output";
import { Helmet } from "react-helmet";
import NotFound from "./NotFound";

export default function CategoryPage() {
  const navigate = useNavigate();
  const { category } = useParams();

  const validCategories = ["cinema", "restaurant", "cafe", "activity"];

  // check route
  if (!validCategories.includes(category)) {
    return <NotFound />;
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

  const items = places.filter((item) => item.category === category);

  const grouped = {
    [category]: items,
  };

  return (
    <div className="cinemas-page">
      <Helmet>
        <title>{currentSEO.title}</title>

        <meta name="description" content={currentSEO.desc} />
        <meta property="og:title" content={currentSEO.title} />
        <meta property="og:description" content={currentSEO.desc} />

        <link rel="canonical" href={`https://nekhrogfeen.app/${category}`} />
      </Helmet>

      <button className="home-btn" onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>

      <Output
        grouped={grouped}
        expanded={{}}
        setExpanded={() => {}}
        showViewMore={false}
        showAll={true}
      />

      <TripList />
    </div>
  );
}
