import { Router } from "express";
import { getSICompanies, getSICompanyByName, getSICompanyByID} from "../queries/si_queries.js";

const app = Router();

app.get('/',async function (req,res){
    const companies = await getSICompanies();
    res.json(companies)
})

app.get("/:name", async function(req, res) {
    const data = await getSICompanyByName(req.params.name);
    res.json(data);
})

app.get("/id/:id", async function(req, res) {
    const data = await getSICompanyByID(req.params.id);
    res.json(data);
})

export default app;