import LoadData from "./LoadData";

const Content = ({ data, onDelete, onEdit }) => {
  return (
    <content className="container__content">
      {data.map((user) => (
        <LoadData key={user.id} user={user} onDelete={onDelete} onEdit={(id) => onEdit(id)} />
      ))}
    </content>
  );
};

export default Content;
