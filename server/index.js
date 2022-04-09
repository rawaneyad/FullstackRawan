const express = require('express');
const { join } = require('path');
const app = require('express')();

console.log(process.env.NODE_ENV);

app.use('/api/v1', (req, res) => {
  res.send('Server is running');
  res.end();
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}
app.use(clientError)
app.use(serverError)

app.listen(3000, () =>
  console.log('Server is running on port http://localhost:3000')
);
