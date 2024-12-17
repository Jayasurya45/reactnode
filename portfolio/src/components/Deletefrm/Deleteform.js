import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Deleteform = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:7000/delete/${id}`);
      alert("Item deleted: " + JSON.stringify(response.data));
      navigate("/"); 
    } catch (error) {
      console.error(error);
      alert("Error deleting item");
    }
  };

  return (
    <div>
      <h2>Delete Item</h2>
      <p>Are you sure you want to delete item with ID: {id}?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Deleteform;
