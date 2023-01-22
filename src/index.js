const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/", (req, res) => {
    res.send("Hello world")

})

app.post("/add", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
   
    if (typeof (num1) == "string" || typeof (num1) == "string") {
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be numeric"
        })
    }
    else {
        res.status(200).json({
            status: "Sucess",
            message: "the sum of given two numbers",
            sum: num1 + num2
        })
    }


})

app.post("/multiply", (req, res) => {
    // console.log(req.body)
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    let mlt = 0;
    if (typeof (num1) == "string" || typeof (num1) == "string") {
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be numeric"
        })
    }
    else{
        res.status(200).json({
            status: "Sucess",
            message: "The product of given numbers",
            mult: num1 * num2
        })
    }
   

})

app.post("/sub", (req, res) => {
    // console.log(req.body)
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    let mlt = 0;
    if (typeof (num1) == "string" || typeof (num1) == "string") {
        return res.status(400).json({
            status: "Error",
            message: "the difference of given two numbers"
        })
    }
    else{
        res.status(200).json({
            status: "Sucess",
            message: "Inputs must be provided",
            mult: num1 - num2
        })
    }
   

})

app.post("/div", (req, res) => {
   
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    // let div =0;
    if (typeof (num1) == "string" || typeof (num1) == "string") {
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be numeric"
        })
    }

    else if (num2 === 0 ) {
        return res.status(400).json({
            status: "Failure",
            message: "Cann't divide by Zero",
        })
    } else {
        res.status(200).json({
            status: "Sucess",
            message: "The division of given numbers",
            div: num1 / num2
        })
    }


})
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;