import { useForm } from "react-hook-form";
import { GiCrossMark } from "react-icons/gi";
import styled from "styled-components";

const EditForm = ({ onEdit, idToEdit, toggleEditData }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (user) => {
    onEdit(idToEdit, user);
    toggleEditData(false);
  };
  return (
    <EditFormDiv id="editF">
      <GiCrossMark
        style={{ color: "#800000", fontSize: "25px" }}
        onClick={() => toggleEditData(false)}
      />
      <span style={{ color: "grey", fontSize: "10px" }}>Close</span>
      <EditZone onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <TypeInput
            type="text"
            placeholder="Edit Name"
            name="name"
            ref={register({ required: true })}
          />
        </div>
        <div>
          <label>Job</label>
          <TypeInput type="text" placeholder="Edit Job" name="job" ref={register} />
        </div>

        <BtnInput type="submit" value="Edit" />
      </EditZone>
    </EditFormDiv>
  );
};

export default EditForm;

const BtnInput = styled.input`
  margin-top: 2%;
  margin-bottom: 2%;
  font-family: inherit;
  border-radius: 25px 25px 25px 25px;
  outline: none;
  border-color: black;
  background-color: ivory;
`;

const EditFormDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3%;
`;

const EditZone = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  border-radius: 50px 50px 50px 50px;
  background-color: #4d3319;
  opacity: 0.8;
  border: 2px solid #1a000d;
  box-shadow: 3px 3px 5px 6px rgb(27, 27, 27), inset 0 0 10px rgb(27, 27, 27);
`;

const TypeInput = styled.input`
  margin-left: 1%;
  margin-bottom: 2%;
  border-bottom: 2px dashed rgb(27, 27, 27);
  border-top-style: hidden;
  border-left-style: hidden;
  border-right-style: hidden;
  background-color: transparent;
`;
