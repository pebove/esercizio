import styled from "styled-components";
import { FaUserNinja } from "react-icons/fa";

const LoadData = ({ user, onDelete, onEdit }) => {
  return (
    <Dataload>
      <FaUserNinja style={{ marginLeft: "20%", fontSize: "30px" }} />
      <span style={{ color: "grey", cursor: "pointer" }} onClick={() => onEdit(user.id)}>
        {" "}
        Edit
      </span>
      <span style={{ color: "#800000", cursor: "pointer" }} onClick={() => onDelete(user.id)}>
        {" "}
        Delete
      </span>

      <h3 style={{ textAlign: "center" }}>{user.name}</h3>
      <p style={{ textAlign: "center" }}>{user.job}</p>
    </Dataload>
  );
};

export default LoadData;

const Dataload = styled.div`
  margin-right: 2%;
  margin-left: 5%;
  padding: 2%;
  margin-bottom: 5%;
  border-radius: 38% 62% 55% 45% / 32% 53% 47% 68%;
  animation: vawe 8s linear infinite;
  border: 3px solid black;
  background-image: linear-gradient(45deg, #1a000d, #4d004d);
  @keyframes vawe {
    20% {
      border-radius: 45% 55% 62% 38% / 53% 51% 49% 47%;
    }
    40% {
      border-radius: 45% 55% 49% 51% / 36% 51% 49% 64%;
    }
    60% {
      border-radius: 60% 40% 57% 43% / 47% 62% 38% 53%;
    }
    80% {
      border-radius: 60% 40% 32% 68% / 38% 36% 64% 62%;
    }
  }
`;
