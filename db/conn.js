const mongoose = require('mongoose')

async function main(){

    try {
    await mongoose.connect('mongodb+srv://lucasm:Pulh3ObV7iUijTPj@cluster0.jpof0et.mongodb.net/?retryWrites=true&w=majority')
    console.log('Banco OK');
    
} catch (error) {
    console.log('Erro: ' + error)
}

}

module.exports = main