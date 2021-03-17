const express = require('express');
const app = express();
app.listen(3000,()=>{
    console.log("App listening on pport 3000...");
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