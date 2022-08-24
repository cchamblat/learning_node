const {URL} = require("url");

const validarUrl = (req, res, next) =>{
    try {
        const {origin} = req.body;
        const urlForm = new URL(origin);
        if (urlForm.origin !== "null") {
            return next();            
        } else {
            throw new Error("No valida");            
        }
    } catch (error) {         
        return res.send("Url no valida");
    }


}

module.exports = validarUrl;