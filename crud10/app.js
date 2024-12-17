const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json()); 

mongoose
  .connect('mongodb://localhost:27017/mydatabase')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const ItemSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Item = mongoose.model('Item', ItemSchema);


app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving items', details: err });
  }
});


app.get('/edit/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving item', details: err });
  }
});


app.post('/create', async (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required' });
  }
  try {
    const newItem = new Item({ name, age });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: 'Error creating item', details: err });
  }
});


app.post('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  try {
    const updatedItem = await Item.findByIdAndUpdate(
      id,
      { name, age },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(500).json({ error: 'Error updating item', details: err });
  }
});


app.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted', item: deletedItem });
  } catch (err) {
    res.status(500).json({ error: 'Error while deleting', details: err });
  }
});

app.listen(7000, () => {
  console.log('Server is listening on port 7000');
});
