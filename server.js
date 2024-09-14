const express = require('express');//1
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const scoreRoutes = require('./routes/scoreRoutes');

const app = express();//1
connectDB();

app.use(cors());
app.use(express.json());//1

app.use('/api/auth', authRoutes);
app.use('/api/scores', scoreRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
);//1
