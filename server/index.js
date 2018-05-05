const app = require('./server');
const db = require('./db')
const PORT =1337;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
  db.sync({force:false})
  .then( () => {
    console.log('db is connected')
  })
  .catch( err => {
    console.error('db is NOT connected!')
    console.error(err)
  })
});
