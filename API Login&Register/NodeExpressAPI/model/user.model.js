const mongoose = require('mongoose');
const topper = mongoose.Schema({
    tid: Number,
    tage: Number,
    tname: String,
    taddress: String,
    tphone: String,
    temail: String,
    tdob: Date,
    created_At: Date,
    updated_At: Date,
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('topper', topper);