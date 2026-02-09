import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchGitHubUser } from "../utils/githubApi";

export default function ProfilePage() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);

      const res = await fetchGitHubUser(username);

      if (!res.found) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      setUser(res.data);
      setLoading(false);
    };

    fetchUser();
  }, [username]);

  if (loading) return <p style={{ padding: "30px" }}>Loading...</p>;
  if (notFound) return <p style={{ padding: "30px", color: "red" }}>User not found.</p>;

  return (
    <div style={{ padding: "30px" }}>
      <h1>{user.name || user.login}</h1>

      <img
        src={user.avatar_url}
        width="150"
        alt="avatar"
        style={{ borderRadius: "50%", marginTop: "10px" }}
      />

      <div style={{ marginTop: "20px", lineHeight: "1.8" }}>
        <p><b>Username:</b> {user.login}</p>
        <p><b>Bio:</b> {user.bio || "No bio available"}</p>
        <p><b>Location:</b> {user.location || "Not specified"}</p>
        <p><b>Public Repos:</b> {user.public_repos}</p>
        <p><b>Followers:</b> {user.followers}</p>
        <p><b>Following:</b> {user.following}</p>
        <p>
          <b>GitHub:</b>{" "}
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </p>
      </div>
    </div>
  );
}
