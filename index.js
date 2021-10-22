const express = require("express");
const app = express();
const port = 4000;

const cors = require("cors");
app.use(cors());

app.use(express.json());

const student = [
    {id:0,name:"rohan"},
    {id:1,name:"saad"},
    {id:2,name:"sabit"},
    {id:3,name:"safwan"},
];

app.post("/students",(req,res)=>{
    const newUser = req.body;
    newUser.id = student.length;
    student.push(newUser);
    res.json(newUser);
})

app.get("/students",(req,res)=>{
    const search = req.query.search;
    if (search) {
        const searchResult = student.filter(st=>st.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(student);
    }
})

app.get('/',(req,res)=>{
    res.send("Second time");
});

app.get('/user/:id',(req,res)=>{
    const id = req.params.id;
    const user = student[id];
    res.send(user);
})

app.listen(port,()=>{
    console.log("listening ",port)
})