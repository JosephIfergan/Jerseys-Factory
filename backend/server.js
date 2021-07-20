import express from 'express'
import dotenv from 'dotenv'
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API IS RUNNING')
} )

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Le serveur fonctionne en mode ${process.env.NODE_ENV} sur le port ${PORT}`));