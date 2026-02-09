import { useHistoryContext } from "../context/HistoryContext";
import { Link } from "react-router-dom";

export default function HistoryPage() {
  const { history, clearHistory } = useHistoryContext();

  return (
    <div
      style={{
        background: "#f7f9fb",
        minHeight: "100vh",
        paddingTop: "40px",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>Your Search History</h2>

      
      <div
        style={{
          width: "650px",
          margin: "0 auto",
          background: "white",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
        }}
      >
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr",
            padding: "14px 20px",
            borderBottom: "1px solid #ddd",
            fontWeight: "600",
            textAlign: "left",
          }}
        >
          <span>Search Term</span>
          <span>User Image</span>
          <span>GitHub User Name</span>
        </div>

        
        {history.length === 0 ? (
          <p style={{ padding: "20px", color: "#777" }}>
            No search history found.
          </p>
        ) : (
          history.map((item) => (
            <div
              key={item.id}
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr 1fr",
                padding: "20px 20px",
                borderBottom: "1px solid #eee",
                textAlign: "left",
                alignItems: "center",
              }}
            >
              
              <span style={{ fontWeight: "500" }}>{item.term}</span>

              
              {item.found ? (
                <img
                  src={item.user.avatar_url}
                  width="65"
                  height="65"
                  style={{
                    borderRadius: "6px",
                    border: "1px solid #ddd",
                  }}
                />
              ) : (
                <span style={{ color: "red" }}>—</span>
              )}

              
              {item.found ? (
                <Link
                  to={`/profile/${item.user.login}`}
                  style={{
                    color: "#2980b9",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.user.login}
                </Link>
              ) : (
                <span style={{ color: "red" }}>Search result not found</span>
              )}
            </div>
          ))
        )}
      </div>

      
      {history.length > 0 && (
        <button
          onClick={clearHistory}
          style={{
            marginTop: "30px",
            padding: "12px 40px",
            background: "#2ecc71",
            color: "white",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Clear Search History
        </button>
      )}
    </div>
  );
}
