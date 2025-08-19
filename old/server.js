const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files (e.g., HTML, CSS, JS for your game frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Fallback for unmatched routes (optional)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
