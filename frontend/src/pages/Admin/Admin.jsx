import useFetch from "@services/useFetch";
import UserCard from "../components/UserCard";
import "./Admin.css";

function Admin() {
  const { data: users } = useFetch({
    path: "/users",
    method: "get",
  });

  return (
    <div className="admin">
      <h1>Admin</h1>
      <div className="conteneur">
        <h2 className="conteneur_title">All Users</h2>
        <ul>
          {users?.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              firstname={user.first_name}
              lastname={user.last_name}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Admin;
