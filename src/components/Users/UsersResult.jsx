import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import UserItem from "./UserItem";
import Spinner from "../Layout/Spinner";

function UsersResults() {
    const { users, loading } = useContext(GithubContext); 
  

//   useEffect(() => {
    
//   }, []);
  console.log("Error:", users);

  
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((userw) => (
        <UserItem key={userw.id} user={userw} />
        ))}
      </div>
    );
  } else {
    return <Spinner /> ;
  }
}

export default UsersResults;
