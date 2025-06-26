const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require('./routes/users');

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'ejs');

// Routes
app.use('/', userRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
