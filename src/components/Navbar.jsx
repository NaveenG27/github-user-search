import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const active = (path) => ({
    paddingBottom: "5px",
    borderBottom: pathname === path ? "3px solid #3498db" : "none",
    color: pathname === path ? "#3498db" : "#000",
    textDecoration: "none",
    fontWeight: "500",
  });

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: "40px",
        padding: "20px 40px",
        background: "white",
        borderBottom: "1px solid #eee",
        fontSize: "16px",
      }}
    >
      <Link to="/" style={active("/")}>Home</Link>
      <Link to="/history" style={active("/history")}>History</Link>
    </nav>
  );
}
