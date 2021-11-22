import mongoose from 'mongoose'

const db = async () => {

    try {

        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Base de datos esta online:', mongoose.connection.name)

    } catch (error) {
        console.log(error)
        throw new Error('Error al iniciar la base de datos')
    }

}

export default db