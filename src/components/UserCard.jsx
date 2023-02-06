function UserCard({ user }) {
  if (!user) return <p>Loading user info...</p>;
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default UserCard;
