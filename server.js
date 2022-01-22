require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

// Initialize express
const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api', require('./routes/userRouter'));

// connect to mongodb
const URI = process.env.MONGO_URI;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log('connected to database');
  }
);

// app.get('/', (req, res) => {
//   res.send('Welcome to wealth hat homepage');
// });

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
