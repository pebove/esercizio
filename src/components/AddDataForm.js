import { useState } from "react";
import styled from "styled-components";

const AddDataForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Inserisci un Nome");
      return;
    }

    onAdd({ name, job });

    setName("");
    setJob("");
  };
  return (
    <FormDiv>
      <AddData onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <TypeInput
            type="text"
            placeholder="Add name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Job</label>
          <TypeInput
            type="text"
            placeholder="Add Job"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
        </div>

        <BtnInput type="submit" value="Crea" />
      </AddData>
    </FormDiv>
  );
};

export default AddDataForm;

const TypeInput = styled.input`
  margin-left: 1%;
  margin-bottom: 2%;
  border-bottom: 2px dashed rgb(27, 27, 27);
  border-top-style: hidden;
  border-left-style: hidden;
  border-right-style: hidden;
  background-color: transparent;
`;

const BtnInput = styled.input`
  margin-top: 2%;
  margin-bottom: 2%;
  font-family: inherit;
  border-radius: 25px 25px 25px 25px;
  outline: none;
  border-color: black;
  background-color: ivory;
`;

const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3%;
`;
const AddData = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  border-radius: 50px 50px 50px 50px;
  background-color: #660033;
  opacity: 0.8;
  border: 2px solid #1a000d;
  box-shadow: 3px 3px 5px 6px rgb(27, 27, 27), inset 0 0 10px rgb(27, 27, 27);
`;
