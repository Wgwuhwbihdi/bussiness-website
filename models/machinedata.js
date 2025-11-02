const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const machinedataSchema = new mongoose.Schema({
    model: {
        type:String,
        required:true,
    },
    usagehoure:{
        type:Number,
        required:true,
    },
    maintanancecost:{
        type:Number,
        required:true,
    },
    kindofmachine:{
        type:String,
        required:true,
    },
    Country:String,
})

const machinedata  =  mongoose.model("machinedata",machinedataSchema);
module.exports = machinedata ;
