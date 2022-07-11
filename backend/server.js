const express = require('express');
 const dotenv = require('dotenv')
dotenv.config();
const app = express();




 



app.get('/', (req, res) => {
  res.send('Successful Bckend response.');
});

app.listen(8000, () => console.log(`Server is running at 8000`));






