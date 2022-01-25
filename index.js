
// import statements
const express = require("express");


//configuration like db
const data = [];


//app initialisation
const app = express();




//app middlewares
app.use(express.json())



//app routes
// mainly four types of request which get, post, put and delete
// there are three ways to accept data from req obj which is params, query and body
app.get("/", (req,res) => {
    res.json({
        data:"Hello World"
    });
})
app.get("/member/:id", (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    res.send(`student id is ${id}`)
})

app.get("/member", (req, res) => {
    console.log(req.query);
    const name = req.query.name;
    const age = req.query.age;
    res.send(`member name is ${name} and age is ${age}`);
})

app.get("/members", (req, res) => {
    res.status(200).json(data)
})
app.post("/member", (req, res) => {
    let values = req.body;
    data.push(values);
    res.status(201).send("data inserted successfully");
})

app.put("/member/:name", (req, res) => {
    let name = req.params.name;
    let updateName = req.body.name;
    let index = data.findIndex((d) => d.name == name);
    data[index].name = updateName;
    res.status(201).json(data);
})

app.delete("/member/:name", (req, res) => {
    let name = req.params.name;
    let index = data.findIndex((d) => d.name == name);
    data.splice(index, 1);
    res.status(200).json(data);
})


//app listen
app.listen(9000, () => console.log("server is running"));