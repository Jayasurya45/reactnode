import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";

const MainPage = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

 
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:7000/items");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
        alert("Failed to fetch items");
      }
    };
    fetchItems();
  }, []);

  
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      await axios.delete(`http://localhost:7000/delete/${id}`);
      setItems(items.filter((item) => item._id !== id));
      alert("Item deleted successfully");
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Failed to delete item");
    }
  };

  return (
    <div>
      <h1>Items List</h1>

      <button onClick={() => navigate("/create")}>Create New Item</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>
              <td>
  <button
    style={{ marginRight: "10px" }} 
    onClick={() => navigate(`/edit/${item._id}`)}
  >
    Edit
  </button>
  <button onClick={() => handleDelete(item._id)}>Delete</button>
</td>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainPage;
