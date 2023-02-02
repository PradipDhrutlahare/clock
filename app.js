const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.port || 8000
    // const router = express.Router();



//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const static_path = path.join(__dirname, './public');
console.log(static_path);
app.use(express.static(static_path));


//using html file in home 
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './public/clock.html'));
})



app.listen(PORT, () => {
    console.log(`server running ${PORT}`);
})