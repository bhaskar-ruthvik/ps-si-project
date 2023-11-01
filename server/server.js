import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import * as https from 'https';
import bodyParser from 'body-parser';


import CompaniesRouter from "./routes/companies.js"
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Routers
app.use("/api/companies", CompaniesRouter)

app.get('/',function (req,res){
    const query = req.queryort 
    console.log(query)
    console.log("Get request sent");
    res.json({"title": "Response"})
})





const PORT = process.env.PORT || 8080
app.listen(PORT,function(){
    console.log("Server has started successfully on port "+ PORT);
})

