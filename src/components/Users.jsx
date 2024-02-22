import { fetchAllUsers } from "../utils/utils";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import User from "./User";

const Users = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchAllUsers,
  });

  if (isLoading) return <Loading />;
  return (
    <div>
      <ul>
        {data?.map(({ username, name, avatar_url }) => (
          <User key={username} name={name} avatar_url={avatar_url} />
        ))}
      </ul>
    </div>
  );
};

export default Users;
