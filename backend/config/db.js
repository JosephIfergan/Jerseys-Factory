import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const connexion = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`MongoDB est bien connecté sur ${connexion.connection.host}`)
    } catch (error) {
    // console.error(`Error: ${error.message}`)
    // process.exit(1)
        console.error('La connexion a échoué')
    }
}

export default connectDB