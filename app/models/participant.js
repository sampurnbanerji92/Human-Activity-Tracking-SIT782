var mongoose = require('mongoose');


var participantSchema = mongoose.Schema({
    name: String,
    userId:String,
    id: String,
    dob: String
});




module.exports = mongoose.model('Participant', participantSchema);
