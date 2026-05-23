import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound">
      <div className="notfound-box">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>الصفحة اللي بتحاول تفتحها مش موجودة</p>

        <button onClick={() => navigate("/")}>
          ⬅ Go Home
        </button>
      </div>
    </div>
  );
}