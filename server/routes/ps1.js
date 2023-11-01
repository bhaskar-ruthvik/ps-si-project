import { Router } from "express";
import { getPS1Companies, getPS1CompanyByName, getPS1CompanyByID} from "../queries/ps1_queries.js";

const app = Router();

app.get('/',async function (req,res){
    const companies = await getPS1Companies();
    res.json(companies)
})

app.get("/:name", async function(req, res) {
    const data = await getPS1CompanyByName(req.params.name);
    res.json(data);
})

app.get("/id/:id", async function(req, res) {
    const data = await getPS1CompanyByID(req.params.id);
    res.json(data);
})

export default app;