import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    cartData: { type:object,default:{}},   
}, {minimize:false})

const userMoldel = mongoose.model.user || mongoose.model('user', userSchema)

export default userMoldel