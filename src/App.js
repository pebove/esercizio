import Head from "./components/Head";
import Content from "./components/Content";
import AddDataForm from "./components/AddDataForm";
import { useState, useEffect } from "react";
import EditForm from "./components/EditForm";
import Footer from "./components/Footer";

function App() {
  const [toggleAddData, setToggleAddData] = useState(false);
  const [toggleEditData, setToggleEditData] = useState(false);
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchData();
      setData(dataFromServer);
    };

    getData();
  }, []);

  // Fetch Data
  const fetchData = async () => {
    const response = await fetch("https://602a74f66c995100176ee630.mockapi.io/api/v1/users");
    const loadData = await response.json();

    return loadData;
  };

  // Add Data
  const addData = async (user) => {
    const response = await fetch("https://602a74f66c995100176ee630.mockapi.io/api/v1/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const newData = await response.json();
    console.log([...data, newData]);
    setData([...data, newData]);
  };

  // Delete Data
  const deleteData = async (id) => {
    await fetch(`https://602a74f66c995100176ee630.mockapi.io/api/v1/users/${id}`, {
      method: "DELETE",
    });

    setData(data.filter((user) => user.id !== id));
  };
  // Edit Data
  const editData = async (id, user) => {
    const response = await fetch(`https://602a74f66c995100176ee630.mockapi.io/api/v1/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const newUser = await response.json();
    newUser.id = id;

    const newUsers = data.filter((user) => user.id !== id);

    setData([...newUsers, newUser]);
  };

  const startEditing = (id) => {
    setToggleEditData(true);
    setEditId(id);
  };

  return (
    <div className="container">
      <Head onToggle={() => setToggleAddData(!toggleAddData)} toggleAdd={toggleAddData} />
      {toggleAddData && <AddDataForm onAdd={addData} />}{" "}
      {toggleEditData && !toggleAddData && (
        <EditForm onEdit={editData} idToEdit={editId} toggleEditData={setToggleEditData} />
      )}
      {data.length > 0 ? (
        <Content data={data} onDelete={deleteData} onEdit={startEditing} />
      ) : (
        "No Data"
      )}
      <Footer />
    </div>
  );
}

export default App;
