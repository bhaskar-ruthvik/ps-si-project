import { Router } from "express";
import { getCompanies, getCompanyByName, getCompanyByID} from "../queries/company_queries.js";

const app = Router();

function checkType(req, res, next) {
    console.log(req.params.type)
    if (!['SI', 'PS1', 'PS2'].includes(req.params.type)) {
        res.status(404).send("Invalid Route")
        return;
    }
    next();
}


app.use("/:type",checkType)

app.get('/:type',async function (req,res){
    const companies = await getCompanies(req.params.type);
    res.json(companies)
})

app.get("/:type/:name", async function(req, res) {    
    const data = await getCompanyByName(req.params.type,req.params.name);
    res.json(data);
})

app.get(":type/id/:id", async function(req, res) {
    const data = await getCompanyByID(req.params.type,req.params.id);
    res.json(data);
})

export default app;