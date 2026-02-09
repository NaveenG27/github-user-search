export default function UserCard({ user }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "20px",
      borderRadius: "8px",
      width: "250px"
    }}>
      <img 
        src={user.avatar_url} 
        alt="avatar"
        style={{ width: "100px", borderRadius: "50%" }} 
      />
      <h3>{user.login}</h3>
    </div>
  )
}
