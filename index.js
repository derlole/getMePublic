const express = require('express');
const app = express();

const PORT = 4000;

// Middleware
app.use(express.json());

// Router einbinden
app.use('/downloads', require('./routes/downloads.js'));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
}); 
