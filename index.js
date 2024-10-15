const express = require('express');
const {handler} = require('./controller/')
const app = express();

app.use(express.json())

app.post('*',async (req,res)=>{
    
    res.send(await handler(req))
})

app.get('*', async (req,res)=>{
    res.send(await handler(req))
})

app.listen(8080,(err)=>{
    if(err) console.log(err)
    else console.log('listening at 8080')
})