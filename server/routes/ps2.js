import { Router } from "express";
import { getPS2Companies, getPS2CompanyByName, getPS2CompanyByID} from "../queries/ps2_queries.js";

const app = Router();

app.get('/',async function (req,res){
    const companies = await getPS2Companies();
    res.json(companies)
})

app.get("/:name", async function(req, res) {
    const data = await getPS2CompanyByName(req.params.name);
    res.json(data);
})

app.get("/id/:id", async function(req, res) {
    const data = await getPS2CompanyByID(req.params.id);
    res.json(data);
})

export default app;