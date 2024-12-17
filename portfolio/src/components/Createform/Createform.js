import React, { useState } from "react";
import axios from "axios";

const Createform = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleCreate = async () => {
    try {
      const res = await axios.post("http://localhost:7000/create", { name, age });
      alert("Item created: " + JSON.stringify(res.data));
      setName("");
      setAge("");
    } catch (error) {
      console.error(error);
      alert("Error creating item");
    }
  };

  return (
    <div>
      <h1>create form</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="age">Age</label>
      <input
        type="text"
        id="age"
        name="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default Createform;
