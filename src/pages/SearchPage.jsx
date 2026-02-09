import { useState } from "react";
import { fetchGitHubUser } from "../utils/githubApi";
import { useHistoryContext } from "../context/HistoryContext";
import { Link } from "react-router-dom";

export default function SearchPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const { addHistory } = useHistoryContext();

  const handleSearch = async () => {
    if (!input.trim()) return;

    setLoading(true);

    const response = await fetchGitHubUser(input.trim());

    const historyItem = {
      id: Date.now(),
      term: input.trim(),
      found: response.found,
      user: response.data,
    };

    addHistory(historyItem);
    setResult(historyItem);

    setLoading(false);
  };

  return (
    <div
      style={{
        background: "#f7f9fb",
        minHeight: "100vh",
        paddingTop: "40px",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>Search GitHub User</h2>

      
      <div style={{ marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            padding: "12px",
            width: "270px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            marginRight: "10px",
          }}
        />

        <button
          onClick={handleSearch}
          style={{
            padding: "12px 35px",
            background: "#2ecc71",
            color: "white",
            borderRadius: "6px",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

     
      <h3>Search Results</h3>

      <div
        style={{
          width: "450px",
          margin: "0 auto",
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          border: "1px solid #e0e0e0",
        }}
      >
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            paddingBottom: "12px",
            borderBottom: "1px solid #ddd",
            fontWeight: "600",
          }}
        >
          <span>User Image</span>
          <span>GitHub User Name</span>
        </div>

        {loading ? (
          <p style={{ marginTop: "20px" }}>Loading...</p>
        ) : result ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              marginTop: "20px",
              alignItems: "center",
            }}
          >
            {result.found ? (
              <>
                <img
                  src={result.user.avatar_url}
                  width="70"
                  height="70"
                  style={{ borderRadius: "6px", border: "1px solid #ddd" }}
                />
                <Link
                  to={`/profile/${result.user.login}`}
                  style={{ color: "#2980b9", fontWeight: "600" }}
                >
                  {result.user.login}
                </Link>
              </>
            ) : (
              <p style={{ gridColumn: "1/3", color: "red" }}>
                User not found
              </p>
            )}
          </div>
        ) : (
          <p style={{ paddingTop: "20px", color: "#777" }}>No search yet</p>
        )}
      </div>
    </div>
  );
}
