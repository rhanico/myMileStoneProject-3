// ENTRY POINT FOR MY EXPRESS APP

const express = require( 'express' )
const app = express()

/* app.get("/api",(req, res) => {
    res.send("Hellow World")
})
*/

app.get("/api", function (req, res) {
    res.send("Hellow World")
})

app.listen(3000, () => {
    console.log("Server started on port 3000") 
});