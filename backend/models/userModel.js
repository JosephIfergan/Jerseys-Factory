import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true // afin que 2 utilisateurs n'aient pas la même adresse mail
        },
        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        },
    }, {
        timestamps: true
    })

const User = mongoose.model('User', userSchema)

export default User