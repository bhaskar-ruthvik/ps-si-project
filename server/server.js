import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import * as https from 'https';
import bodyParser from 'body-parser';
import { db , getCompaniesByCategory} from './firebase/firebase.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.get('/',function (req,res){
    console.log("Get request sent");
    res.json({"title": "Response"})
})

app.get('/companies/:category',async function (req,res){
    const companies = await getCompaniesByCategory(db,req.params.category);
    res.json(companies)
})
const PORT = process.env.PORT || 8080
app.listen(PORT,function(){
    console.log("Server has started successfully on port "+ PORT);
})
