import { GiJumpAcross } from "react-icons/gi";
import styled from "styled-components";

const Footer = () => {
  return (
    <Foot>
      <h4 style={{ color: "grey", fontStyle: "italic" }}>
        <GiJumpAcross style={{ color: "grey", fontSize: "20px" }} />
        &nbsp;Esercizio React, Beppe Feb/2021
      </h4>
    </Foot>
  );
};

export default Footer;

const Foot = styled.div`
  display: flex;
  justify-content: center;
`;
