module.exports = { // Handle POST requests to login
    route: (app) => { 
      const users = [
        { email: 'frameworks@griffith.com', password: '123' }, 
        { email: 'rasmus@griffith.com', password: '456' },
        { email: 'software@c.com', password: '789' }
      ];
  
      app.post('/login', (req, res) => {
        const { email, password } = req.body;
        const match = users.find(user => user.email === email && user.password === password);
  
        if (match) {
          res.json({ valid: true });// Login successful
        } else {
          res.json({ valid: false });// Login failed
        }
      });
    }
  };
  