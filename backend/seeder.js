import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(sampleProducts)

        console.log('Data importée avec succés !')
    } catch (error) {
        console.error(`${error}`)
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data supprimée avec succés !')
    } catch (error) {
        console.error(`${error}`)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}
// Cette commande permet de récupérer les arguments de la console
// On va chercher dans le array la 3eme valeur qui est "-d"
// Script ajouté à package.json pour faciliter la commande