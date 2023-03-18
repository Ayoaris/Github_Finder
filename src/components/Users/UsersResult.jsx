import { useEffect, useState } from "react";
import UserItem from "./UserItem";
import Spinner from "../Layout/Spinner";

function UsersResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const gitUrl = import.meta.env.VITE_GITHUB_URL;
  const gitToken = import.meta.env.VITE_GITHUB_TOKEN;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${gitUrl}/users`, {
      headers: {
        Authorization: `token ${gitToken}`,
      },
    });
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
        <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner /> ;
  }
}

export default UsersResults;
