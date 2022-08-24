const mongoose = require('mongoose');
mongoose.connect(process.env.URI)
.then(()=> console.log("Connected"))
.catch((e)=> console.log("Failed connect" + e));



