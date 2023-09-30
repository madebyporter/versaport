// server/server.js

import express from 'express';
import { getPeople } from './api/people/read'; // Import the API handler

const app = express();
const port = process.env.PORT || 3000;

// Define the route for fetching people
app.get('/api/people/read', getPeople);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
