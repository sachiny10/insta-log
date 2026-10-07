const express = require('express');
const User = require('./models/user'); // Import the User model
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');




mongoose.connect('mongodb+srv://sy945877_db_user:14GluCme6fikU7qZ@cluster0.4mj63eb.mongodb.net/loginDB')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));



app.get('/', (req, res) => {
  res.render('index');
});

app.post("/get-form-data", async (req, res) => {

if(req.body.username && req.body.password){
      const { username, password } = req.body;

    const newUser = new User({ username, password });
    await newUser.save();
    
    res.render('index');
}else{
  res.render('index');
}
    
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});