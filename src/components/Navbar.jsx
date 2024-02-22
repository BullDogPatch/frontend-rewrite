import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTopics } from "../utils/utils";

function Navbar() {
  const { data } = useQuery({
    queryKey: ["topics"],
    queryFn: getTopics,
  });

  return (
    <nav>
      {data?.map((topic) => (
        <NavLink
          to={`/${topic.slug}`}
          activestyle={{
            color: "rgb(139, 3, 3)",
            textDecoration: "underline",
          }}
          style={({ isActive }) => ({
            color: isActive ? "rgb(139, 3, 3)" : "white",
            fontSize: "1.2rem",
            padding: "5px",
          })}
        >
          {topic.slug}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
