// // app.js
// const express = require('express');
// const sequelize = require('./config/database');
// const authRoutes = require('./routes/authRoutes');

// const app = express();
// app.use(express.json());

// app.use('/api/auth', authRoutes);

// sequelize.sync()
//     .then(() => console.log('Database connected'))
//     .catch(err => console.error('Database connection error:', err));

// module.exports = app;


// // app.js
// const express = require('express');
// const sequelize = require('./config/database');
// const authRoutes = require('./routes/authRoutes');

// const app = express();
// app.use(express.json());
// app.use('/api/auth', authRoutes);

// sequelize.sync()
//     .then(() => console.log('Database connected and synced'))
//     .catch(err => console.error('Database connection error:', err));

// module.exports = app;

// app.js
const express = require('express');
const cors = require('cors');  // Import the CORS middleware
const userRoutes = require('./routes/userRoutes'); // Import user routes
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/database');
const adminRoutes = require('./routes/adminRoutes');
// const orderRoutes = require('./routes/orderRoutes');
const app = express();

// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:3000',  // Allow requests from your frontend URL
}));

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
// app.use('/api/orders', orderRoutes);


sequelize.sync()
    .then(() => console.log('Database connected and synced'))
    .catch(err => console.error('Database connection error:', err));

module.exports = app;

// // app.js
// const express = require('express');
// const cors = require('cors');  // Import the CORS middleware
// const authRoutes = require('./routes/authRoutes');
// const userRoutes = require('./routes/userRoutes'); // Import user routes
// const sequelize = require('./config/database');
// const app = express();

// // Enable CORS for all routes
// app.use(cors({
//     origin: 'http://localhost:3000',  // Allow requests from your frontend URL
// }));

// app.use(express.json());
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes); // Add this line to register user routes

// sequelize.sync()
//     .then(() => console.log('Database connected and synced'))
//     .catch(err => console.error('Database connection error:', err));

// module.exports = app;
