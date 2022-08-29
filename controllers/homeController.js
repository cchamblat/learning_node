
const Url = require('../models/Url');
const { nanoid } = require('nanoid');
    
const agregarUrls = async(req, res) =>{
    const {origin} = req.body;
    try {
        const url = new Url({origin, shortUrl: nanoid(8)});
        await url.save()
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.send("Error algo falló");        
    }

};

const leerUrls = async(req, res) =>{
    try {
        const urls = await Url.find().lean();
        res.render("home", {urls})
        
    } catch (error) {
        console.log(error);
        res.send("Falló algo")
    }

}

const eliminarUrl =  async(req, res) =>{
    const {id} = req.params;
    try {
        await Url.findByIdAndDelete(id);
        res.redirect("/")    
                   
    } catch (error) {
        console.log(error);
        res.send("Falló algo")
        
    }
}

const editarUrl = async(req, res) =>{
    const {id} = req.params;
    const {origin} = req.body;
    try {
        await Url.findByIdAndUpdate(id, {origin});
        res.redirect("/");

        
    } catch (error) {
        console.log(error);
        res.send("Falló algo")
        
    }
}


const editarUrlForm = async(req, res) =>{
    const {id} = req.params;

    try {
        const url = await Url.findById(id).lean();
        res.render("home", {url});

        
    } catch (error) {
        console.log(error);
        res.send("Falló algo")
        
    }
}

const redireccionamiento = async(req, res) =>{
    const {shortUrl} = req.params;
    try {
        const url = await Url.findOne({shortUrl: shortUrl});
        res.redirect(url.origin);
    } catch (error) {
        
    }
}



module.exports = {
    leerUrls,
    agregarUrls,
    eliminarUrl,
    editarUrl,
    editarUrlForm,
    redireccionamiento,
}