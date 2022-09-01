import UsersList from './UsersList'
import {useUsers} from "./useUsers";

export default function UsersPage () {
  const users = useUsers()
  return (
    <main className="users-page">
      <UsersList users={users}/>
    </main>
  );
}

