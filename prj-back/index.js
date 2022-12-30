const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require('./db/User');
const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password    
    resp.send({result})
    
})

app.post("/login", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body);
        if (user) {
                resp.send({user})
        } else {
            resp.send({ result: "No User found" })
        }
    } else {
        resp.send({ result: "No User found" })
    }
});

app.get("/list", async (req,resp)=>{
    let data = await User.find()
    resp.send(data)
})

app.put("/update", async (req,resp)=>{
    console.log(req.params)
    let data = await User.updateOne(
        {name:"admin"},
        {
            $set:req.body
        }
    )
    resp.send(data)
})


app.listen(5000);