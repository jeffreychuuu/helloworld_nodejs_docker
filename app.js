const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Rita BB I LOVE U 3000 <3<3<3<3\nTry Kubernetes continuous deployment!!!!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})