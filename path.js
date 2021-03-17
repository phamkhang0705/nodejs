const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.listen(3000,()=>{
    console.log("App listening on port 3000...");
});

app.get('/',(req,res)=>{
    res.json({
        'name':'KaangKun',
        'age':27
    });
});
app.get('/about',(req,res)=>{
    res.send('KaangKun');
});