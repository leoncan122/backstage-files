const express = require('express');
  
const app = express();
const PORT = 3000;
  
app.use(express.json());

app.get('/', (req, res)=>{
      
    res.send(`App running`);
})

app.post('/', (req, res)=>{
    const {name} = req.body;
      
    res.send(`Welcome ${name}`);
})
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on http://localhost:"+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);