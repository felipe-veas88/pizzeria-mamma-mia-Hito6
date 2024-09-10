import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [total, setTotal] = useState(0);

  const loadTotal = () => {
    const savedTotal = localStorage.getItem("total");
    if (savedTotal) {
      setTotal(Number(savedTotal));
    }
  };

  useEffect(() => {
    loadTotal();

    const handleStorageChange = (e) => {
      if (e.key === "total") {
        loadTotal();
      }
    };

    const handleCustomTotalUpdate = () => {
      loadTotal();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("cartTotalUpdated", handleCustomTotalUpdate);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cartTotalUpdated", handleCustomTotalUpdate);
    };
  }, []);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/cart">🛒 Total: ${total / 100}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
