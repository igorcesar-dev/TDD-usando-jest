let express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.json({ success: true });
})

app.get("/pessoa/:idade", (req, res) => {
    let idade = req.params.idade;
    if(idade < 18) {
        res.json({ menor: true });
    }
})

module.exports = app;