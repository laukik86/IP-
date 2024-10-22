const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(bodyParser.json());

app.post('/calculate-interest',(req,res)=>{
  const{principal,investmentPeriod}=req.body;
  const interestRate = 0.8;

  const interestEarned = principal * interestRate * investmentPeriod;

  res.json({ interestEarned });
})
const PORT =5000;
app.listen(PORT,()=>{
  console.log(`server is running on https://localhost:${PORT}`)
})











