import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Editform = () => {
  const { id } = useParams();  
  const navigate = useNavigate();  
  const [name, setName] = useState("");  
  const [age, setAge] = useState("");    

 
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/edit/${id}`);
        setName(response.data.name);
        setAge(response.data.age);
      } catch (error) {
        console.error("Error fetching item:", error);
        alert("Failed to fetch item details. Please try again.");
      }
    };

    fetchItem();
  }, [id]);

  
  const handleEdit = async () => {
    try {
      const response = await axios.post(`http://localhost:7000/edit/${id}`, {
        name,
        age,
      });
      alert("Item updated successfully: " + JSON.stringify(response.data));
      navigate("/");  
    } catch (error) {
      console.error("Error updating item:", error);
      alert("Failed to update item. Please check your input and try again.");
    }
  };

  return (
    <div>
      <h1>Edit Item</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}  
      />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}  
      />
      <button onClick={handleEdit}>Update</button>
    </div>
  );
};

export default Editform;
