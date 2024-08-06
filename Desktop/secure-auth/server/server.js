const express = require('express');
const User = require('./db/user.model');
const jwt = require('jsonwebtoken');
require("dotenv").config();
require('./db/connection');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:5173", // Your frontend's URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send('Hello World');
});

const createSecretToken = (id) => {
  return jwt.sign({ id}, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
}

app.post ('/signup', async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,

    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    //next()
  } catch (error) {
    console.error(error);
  }
    
}) 
app.get('/check-auth', (req, res) => {
  const token = req.cookies.authToken;

  if (!token) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
    res.status(200).json({ message: 'Authenticated' });
  } catch (error) {
    res.status(401).json({ message: 'Not authenticated' });
  }
});
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Replace this with your user lookup and authentication logic
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    const isMatch = await user.comparePassword(password); // Ensure you have a method to compare passwords

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    } else {
      console.log('User logged in successfully');
    }

    const token = createToken(user._id); // Function to create a JWT token
    res.cookie('token', token, { httpOnly: true, secure: false }); // Set cookie options as required
    res.status(200).json({ success: true, message: 'Logged in successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post('/logout', (req, res) => {
  res.cookie('token', '', { maxAge: 0, httpOnly: true });
  res.status(200).json({ message: 'Logged out successfully' });
});

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});