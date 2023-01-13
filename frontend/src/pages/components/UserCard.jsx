import "./UserCard.css";

function UserCard({ firstname, lastname }) {
  return (
    <li className="userCard">
      <h3>{`${firstname} ${lastname}`}</h3>
      <button type="button" className="">
        Delete
      </button>
    </li>
  );
}

export default UserCard;
