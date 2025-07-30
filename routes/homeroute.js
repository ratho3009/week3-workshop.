const path = require('path');

module.exports = { // Export object with a route function
  route: (app) => {
    app.get('/account', (req, res) => {
      const filepath = path.resolve('./www/account.html'); // Resolves full absolute path to account.html file
      res.sendFile(filepath);  // Sends account.html file as response to the client
    });
  }
};
