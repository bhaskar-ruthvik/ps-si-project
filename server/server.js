import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import * as https from 'https';
import bodyParser from 'body-parser';
import { db } from './firebase/firebase.js';
import { getPS2Companies, getPS2CompanyByName } from './queries/ps2_queries.js';
import Ps1Router from "./routes/ps1.js"
import Ps2Router from "./routes/ps2.js"
import SIRouter from "./routes/si.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Routers
app.use("/companies/PS1", Ps1Router);
app.use("/companies/PS2", Ps2Router);
app.use("/companies/SI", SIRouter);


app.get('/',function (req,res){
    const query = req.queryort 
    console.log(query)
    console.log("Get request sent");
    res.json({"title": "Response"})
})

app.get('/companies/PS2',async function (req,res){
    const query = req.query
    console.log(query)
    const companies = await getPS2Companies(db);
    res.json(companies)
})

app.get('/companies/PS2/:name',async function (req,res){
    const params= req.params
    const company = await getPS2CompanyByName(db,params.name);
    res.json(company)
})



const PORT = process.env.PORT || 8080
app.listen(PORT,function(){
    console.log("Server has started successfully on port "+ PORT);
})

