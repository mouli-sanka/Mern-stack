const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    cid: {type: Number, required: true},
    caadhaar: {type: Number, required: true},
    cpan: {type: String, required: true},
    cdob: {type: Date, required: true},
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Customer', UserSchema);