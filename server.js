const express = require('express')
const myRoute = require("./router/route")




const app = express()
const port =  process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })


/**routes */
app.use('/api', myRoute);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})