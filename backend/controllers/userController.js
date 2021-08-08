import User from "../models/userModel.js";
import generateToken from "../generateToken.js";
import expressAsyncHandler from "express-async-handler";

// POST /api/users/login

const authUser = expressAsyncHandler(async (req, res) => {

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Email ou mot de passe incorrect')
    }
})

// GET /api/users/profile

const getUserProfile = expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })

    } else {
        res.status(404)
        throw new Error('L\'utilisateur n\'existe pas')
    }
})

// POST /api/users

const registerUser = expressAsyncHandler(async (req, res) => {

    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('Cet utilisateur existe déjà')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })

    } else {
        res.status(400)
        throw new Error('Utilisateur incorrect')
    }
})

export { authUser, registerUser, getUserProfile }