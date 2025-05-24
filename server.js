const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files (e.g., HTML, CSS, JS for your game frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Optional: Define API endpoints
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
