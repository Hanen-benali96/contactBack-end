const mongoose = require ('mongoose')
const newContact = new mongoose.Schema({
    name : {
        type : String
    },
 email :{
     type : String
    },
     
 phone :{
     type : String
 }
})
module.exports = Contact = mongoose.model("COontact", newContact)