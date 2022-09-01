import {useState} from 'react';

export default function UsersList ({users}) {
  const [currentSelectedUser, setCurrentSelectedUser] = useState(1);

  return (
    <ul className="users items-list-nav">
      {users.map((u, i) => (
        <li
          key={u.id}
          className={i === currentSelectedUser ? "selected" : null}
        >
          <button
            className="btn"
            onClick={() => setCurrentSelectedUser(i)}
          >
            {u.name}
          </button>
        </li>
      ))}
    </ul>
  );
}