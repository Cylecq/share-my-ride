import useFetchLazy from "../../services/useFetchLazy";
import "./UserCard.css";

function UserCard({ firstname, lastname, id }) {
  const { trigger: triggerDelete } = useFetchLazy({
    method: "delete",
    path: `/users/${id}`,
  });

  const handleClick = async () => {
    await triggerDelete();
  };

  return (
    <li className="userCard">
      <h3>{`${firstname} ${lastname}`}</h3>
      <button type="button" className="" onClick={handleClick}>
        Delete
      </button>
    </li>
  );
}

export default UserCard;
