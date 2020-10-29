const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  	res.json([
		{
			id: 1,
			title: "Learn express",
			body: "run express with docker"
		},
		{
			id: 2,
			title: "Express tut",
			body: "run express tut"
		}
	]) 
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})