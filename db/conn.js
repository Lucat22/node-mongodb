const mongoose = require('mongoose')

async function main(){

    try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_MONGO_USER}:${process.env.DB_MONGO_PWD}@cluster0.jpof0et.mongodb.net/?retryWrites=true&w=majority`)
    console.log('Banco OK');
    
} catch (error) {
    console.log('Erro: ' + error)
}

}

module.exports = main