const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Make sure this is your actual, correct cluster URI
mongoose.connect('mongodb+srv://moon33:moon333@myapps.dq8p6ch.mongodb.net/?retryWrites=true&w=majority&appName=myapps')
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Example schema
const formSchema = new mongoose.Schema({
  fullName: String,
  fatherName: String,
  gender: String,
  city:String,
  course:String,
  state:String,
  district:String,
  pincode:Number,
  studentEmail:String,
});
const Form = mongoose.model('render', formSchema);

// POST route
app.post('/submit', async (req, res) => {
  try {
    const formData = new Form(req.body);
    await formData.save();
    res.status(200).send('Form submitted successfully!');
  } catch (error) {
    res.status(500).send('Error saving form data');
  }
});

app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
