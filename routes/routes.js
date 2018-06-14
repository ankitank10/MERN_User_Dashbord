

module.exports = (app) => {
  let data = {
        name: 'Amelia',
        contractType: 'Contract',
        country: 'united kingdom'

  };
    app.get('/api/getUserData', (req, res) => {
      res.send(data);
    })

    app.get('/api/userDetails', (req, res) => {
      res.redirect('/userDetails');
    })

}