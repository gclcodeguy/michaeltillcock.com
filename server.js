// Import the Express module
const express = require('express');

// Create a new Express app
const app = express();


// Set the port number that the dev server should listen on
const port = 3000;

// Start the dev server, and listen for connections on the specified port
app.listen(port, '127.0.0.1', () => {
  console.log(`Dev server listening on port ${port}`);
});

// Import / require
import CloudTablesApi from 'cloudtables-api';
// const CloudTablesApi = require('cloudtables-api').default;

// In router / controller
let api = new CloudTablesApi('fl8f3ln1eh', 'y8eZ70ECocO0eYlgSBEd0QnB', {
	clientId: 'Unique client id',
	clientName: 'Name'
});

let token = await api.token();
let script = api.dataset('4b419508-6f04-11ed-9f87-eb15775569d3').scriptTag(token);
